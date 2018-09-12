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
        this.state = {
            loading: false,
            loadMore: false,
        };
        this.props.handleUpdatePage('top250');
    }

    componentDidMount() {
        if(this.props.Top250List.length === 0) {
            this.getSearchList();
        }
    }

    getSearchList() {
        this.setState({
            loading: true,
        })
        this.getTop();
    }

    handleWheel = () => {
            if(!this.state.loadMore) {
                this.setState({
                    loadMore: true,
                })
                this.getTop();
            }
    }

    getTop() {
        Server.top250({
            start: this.props.Top250End,
            count: 11,
        }).then(result => {
            const movies = result.data.subjects;
            if (movies) {
                this.setState({
                    loadMore: false,
                    loading: false,
                });
                this.props.onUpdateHandle(movies);
                this.props.onUpdateEndHandle(this.props.Top250End+11);
            } else {
                this.setState({
                    loadMore: false,
                    loading: false,
                });
            }
        });
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
                        this.state.loading
                        ? <Loading title="根据网络情况不同，可能会等待较长时间"/>
                        : this.props.Top250List.map((item, index) => 
                        {

                            return (
                                <MovieItem style={{display: 'inline-block'}} key={index} id={item.id} title={item.title} imgurl={item.images.small} rate={item.rating.average}/>
                            )
                        })
                    }
                    {this.state.loadMore ? <Loading title='加载中'/> : null}
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