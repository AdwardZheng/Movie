import React, { PureComponent } from "react";
import MovieItem from "./MovieItem";
import { Divider, Spin } from "antd";
import { SearchContext } from "../../Context/context";
import Server from '../../Server/server';

class MovieSearch extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            movieList: [],
            loading: false,
        };
        console.log(this.props.searchName);
    }

    componentDidMount() {
        this.getSearchList();
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

    render() {
        return (
            <div>
                <div className='topTitle'>
                    <span>搜索结果：{this.props.searchName}</span>
                </div>
                <div className='content'>
                    {
                        this.state.loading
                        ? <div style={{textAlign: 'center'}}> <span>根据网络情况不同，可能会等待较长时间</span><br/><Spin size='large'/></div>
                        : this.state.movieList.map((item, index) => 
                        {

                            return (
                                <MovieItem key={index} id={item.id} title={item.title} imgurl={item.images.small} rate={item.rating.average}/>
                            )
                        })
                    }
                </div>
                <Divider/>
            </div>
        );
    }
}

export default props => (
    <SearchContext.Consumer>
        {
            context => <MovieSearch {...props} searchName={context.searchName}/>
        }
    </SearchContext.Consumer>
);