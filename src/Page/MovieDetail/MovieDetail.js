import React, { PureComponent } from "react";
import { Rate, Icon } from 'antd';
import Loading from '../../Component/Common/loading.js';
import Server from "../../Server/server";
import { PageContext } from "../../Context/context";
import './index.less';

class MovieDetail extends PureComponent {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            loading: true,
            detail: {},
        }
        this.props.handleUpdatePage('movieDetail');
    }

    componentDidMount() {
        this.getMovieDetail();
        document.documentElement.scrollTop = 0;
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.getMovieDetail();
        }
    }

    getMovieDetail() {
        this.setState({
            loading: true,
        });
        Server.subject(this.props.match.params.id).then( result => {
            if (result) {
                this.setState({
                    detail: result.data,
                    loading: false,
                });
            }
        });
    }

    render() {
        const detail = this.state.detail;
        return (
            this.state.loading 
            ? <Loading/>
            : <div className={'movieDetailWrapper'}>
                <h1>
                    <span>{detail.title}</span>
                    <span>{`(${detail.year})`}</span>
                </h1>
                <div className={'article'}>
                    <div className={'subject'} style={{margin: '0 auto'}}>
                        <div className={'pic'}>
                            <img src={detail.images.small} alt={detail.title}/>
                        </div>
                        <div className={'info'}>
                            <span>导演：{detail.directors.map( item => `${item.name}`)}</span>
                            <br/>
                            <span>主演：{detail.casts.map(item => `${item.name}`).join('/')}</span>
                            <br/>
                            <span>类型：{detail.genres.join('/')}</span>
                            <br/>
                            <span>制片地区/国家：{detail.countries.join('/')}</span>
                            <br/>
                            <span>又名：{detail.aka.join('/')}</span>
                            <br/>
                            <Rate character={<Icon type='heart'/>} allowHalf disabled value={Math.round((detail.rating.average/2)%0.5 === 0 ? detail.rating.average/2 : Math.round(detail.rating.average/2))} style={{fontSize: '10px', color: 'red', marginTop: '3px'}} />
                            <br/>
                            <span>{detail.rating.average}</span>
                        </div>
                        <div className={'relatedInfo'}>
                            <i>{`${detail.title}的简介......`}</i>
                            <p>{detail.summary}</p>
                        </div>
                        <div className={'castsInfo'}>
                            <i>{`${detail.title}的影人......`}</i>
                            <br/>
                            {
                                detail.casts.map((item, index) => (
                                    <div className={'item'} key={index}>
                                        {item.avatars ? <img style={{maxHeight: '180px'}} src={'https://images.weserv.nl/?url='+item.avatars.small.substring(7)} alt={item.name}/> : <div>暂无</div>} 
                                        <br/>
                                        <span>{item.name}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default props =>
<PageContext.Consumer>
    {
        context => <MovieDetail {...props} handleUpdatePage = {context.updatePage}/>
    }
</PageContext.Consumer>;