import React, { PureComponent } from "react";
import MovieItem from "../../Component/Movie/MovieItem";
import { Divider, BackTop } from "antd";
import './index.css';
import LoadMore from '../../Component/Common/loadMore.js';
import Server from '../../Server/server';
import Loading from '../../Component/Common/loading.js';
import { PageContext } from "../../Context/context";

class MovieTop extends PureComponent {
    constructor(props) {
        super(props);
        this.props.handleUpdatePage('top250');
    }

    componentDidMount() {
        if(this.props.Top250List.length === 0) {
            this.getSearchList();
        }
    }

    getSearchList() {
        this.props.changeLoading(true);
        this.getTop();
    }

    handleWheel = () => {
            if(!this.props.loadMore) {
                this.props.changeLoadMore(true);
                this.getTop();
            }
    }

    getTop() {
        this.props.getList(this.props.Top250End);
        this.setState({loadMore: false,loading: false,});
    }

    render() {
        return (
            <LoadMore handleLoadMore={this.handleWheel}>
                <div className='topTitle'>
                    <span>Top250:</span>
                </div>
                <Divider/>
                <div className='content'>
                    {
                        this.props.loading
                        ? <Loading title="根据网络情况不同，可能会等待较长时间"/>
                        : this.props.Top250List.map((item, index) => 
                        {

                            return (
                                <MovieItem style={{display: 'inline-block'}} key={index} id={item.id} title={item.title} imgurl={item.images.small} rate={item.rating.average}/>
                            )
                        })
                    }
                    {this.props.loadMore ? <Loading title='加载中'/> : null}
                </div>
                <Divider/>
                <BackTop className='backTop'/>
            </LoadMore>
        );
    }
}

export default props =>
<PageContext.Consumer>
    {context => (
        <MovieTop {...props} handleUpdatePage={context.updatePage}/>
    )}
</PageContext.Consumer>;