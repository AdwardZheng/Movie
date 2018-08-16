import React, { PureComponent } from "react";
import { Spin } from 'antd';
import Server from "../../Server/server";
import './MovieDetail.css';

class MovieDetail extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            detail: {},
        }
    }

    componentDidMount() {
        this.getMovieDetail();
    }

    getMovieDetail() {
        this.setState({
            loading: true,
        });
        Server.subject(this.props.match.params.id).then( result => {
            console.log(result);
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
        console.log(detail);
        return (
            this.state.loading 
            ? <div style={{textAlign: 'center'}}><Spin size={'large'}/></div>
            : <div className={'wrapper'}>
                <h1>
                    <span>{detail.title}</span>
                    <span>{`(${detail.year})`}</span>
                </h1>
                <div className={'article'}>
                    <div className={'subject'}>
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
                            <span>制片地区/国家：{detail.countries}</span>
                            <br/>
                            <span>上映日期：</span>
                            <br/>
                            <span>片长：</span>
                            <br/>
                            <span>又名：{detail.aka.join('/')}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieDetail;