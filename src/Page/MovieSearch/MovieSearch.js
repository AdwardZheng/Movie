import React, { PureComponent } from "react";
import MovieItem from "../../Component/Movie/MovieItem";
import { Divider,BackTop } from "antd";
import Loading from '../../Component/Common/loading.js';
import { SearchContext, PageContext } from "../../Context/context";
import Server from '../../Server/server';
import './index.less';

class MovieSearch extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            movieList: [],
            loading: false,
            loadMore: false,
        };
        console.log(this.props.searchName);
        this.props.handleUpdatePage('search');
    }

    componentDidMount() {
        this.getSearchList();
        document.documentElement.scrollTop = 0;
    }

    componentDidUpdate(prevProps) {
        if(this.props.searchName !== prevProps.searchName) {
            this.getSearchList();
        }
    }

    getSearchList() {
        console.log("正在请求："+this.props.searchName);
        this.setState({
            loading: true,
        })
        const searchName = this.props.searchName !== "" ? this.props.searchName : this.props.match.params.movieName;
        Server.search({start: 0, q: searchName}).then(result => {
            if (result) {
                this.setState({
                    movieList: result.data.subjects,
                    loading: false,
                });
            }
        });
    }

    handleWheel = () => {
        console.log('wwww');
        if((document.documentElement.clientHeight + document.documentElement.scrollTop) >= document.documentElement.scrollHeight) {
            if(!this.state.loadMore) {
                console.log('aaaa');
                this.setState({
                    loadMore: true,
                })
                this.getTop();
            }
        }
    }

    getTop() {
        Server.top250({
            start: 0,
            count: 9,
        }).then(result => {
            const movies = result.data.subjects;
            if (movies) {
                this.setState({
                    movieList: this.state.movieList.concat(movies),
                    loadMore: false,
                });
            }
        });
    }

    render() {
        return (
            <div className='movieSearch' onWheel={this.handleWheel} onTouchMove={this.handleWheel}>
                <div className='topTitle'>
                    <span>搜索结果：{this.props.searchName}</span>
                </div>
                <div className='content'>
                    {
                        this.state.loading
                        ? <Loading title='根据网络情况不同，可能会等待较长时间'/>
                        : this.state.movieList.map((item, index) => 
                        {
                            return (
                                <MovieItem style={{display: 'inline-block'}} key={index} id={item.id} title={item.title} imgurl={item.images.small} rate={item.rating.average}/>
                            )
                        })
                    }
                </div>
                <Divider/>
                <BackTop className='backTop'/>
            </div>
        );
    }
}

export default props => (
    <SearchContext.Consumer>
        {
            context => (
                <PageContext>
                    {
                        ({updatePage}) => (
                            <MovieSearch {...props} searchName={context.searchName} handleUpdatePage={updatePage}/>
                        )
                    }
                </PageContext>
            )
        }
    </SearchContext.Consumer>
);