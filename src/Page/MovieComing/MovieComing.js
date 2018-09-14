import React, { Component } from "react";
import MovieItem from "../../Component/Movie/MovieItem";
import { Divider } from "antd";
import './index.css';
import LoadMore from '../../Component/Common/loadMore';
import Server from '../../Server/server';
import Loading from '../../Component/Common/loading';
import { PageContext } from "../../Context/context";
import {observer} from 'mobx-react';

@observer
class MovieComing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieList: [],
            loading: false,
            loadMore: false,
            movieStart: 0,
        };
        this.props.handleUpdatePage('comingSoon');
    }

    componentDidMount() {
        this.getSearchList();
    }

    getSearchList() {
        this.setState({
            loading: true,
        })
        this.getList();
    }

    handleLoadMore = () => {
            if(!this.state.loadMore) {
                this.setState({
                    loadMore: true,
                })
                this.getList();
            }
    }

    getList() {
        Server.willComing({
            start: this.state.movieStart,
            count: 9,
        }).then(result => {
            const movies = result.data.subjects;
            if (movies) {
                this.setState({
                    movieList: this.state.movieList.concat(movies),
                    loadMore: false,
                    movieStart: this.state.movieStart+11,
                    loading: false,
                });
                this.props.mobxStore.updateList(movies);
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
            <LoadMore handleLoadMore={this.handleLoadMore}>
                <div className='topTitle'>
                    <span>即将上映: {this.props.mobxStore.comingList.length > 0 ? this.props.mobxStore.comingList[0].title:null}</span>
                </div>
                <Divider/>
                <div className='content'>
                    {
                        this.state.loading
                        ? <Loading title="根据网络情况不同，可能会等待较长时间"/>
                        : this.state.movieList.map((item, index) => 
                        {
                            return (
                                <MovieItem style={{display: 'inline-block'}} key={index} id={item.id} title={item.title} imgurl={item.images.small} rate={item.rating.average}/>
                            )
                        })
                    }
                    {this.state.loadMore ? <Loading title='加载中'/> : null}
                </div>
                <Divider/>
            </LoadMore>
        );
    }
}

export default props =>
<PageContext.Consumer>
    {
        ({updatePage}) => (<MovieComing {...props} handleUpdatePage = {updatePage}/>)   
    }
</PageContext.Consumer>;