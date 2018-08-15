import React, { PureComponent } from "react";
import MovieItem from "./MovieItem";
import { Divider, Spin } from "antd";
import { SearchContext } from "../../Context/context";
import Server from '../../Server/server';

class MovieSearch extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            searchName: this.props.searchName,
            movieList: [],
        };
        console.log(this.state.searchName);
    }

    componentDidMount() {
        this.getSearchList();
    }

    getSearchList() {
        console.log(this.state.searchName);
        Server.search({start: 0, q: this.state.searchName}).then(result => {
            this.setState({
                movieList: result.data.subjects,
            });
        });
    }

    render() {
        return (
            <div>
                <div className='topTitle'>
                    <span>搜索结果：{this.state.searchName}</span>
                </div>
                <div className='content'>
                    {
                        this.state.movieList.length > 0 
                        ? this.state.movieList.map((item, index) => 
                        {

                            return (
                                <MovieItem key={index} title={item.title} imgurl={item.images.small} rate={item.rating.average}/>
                            )
                        })
                        : <div style={{textAlign: 'center'}}> <span>根据网络情况不同，可能会等待较长时间</span><br/><Spin size='large'/></div>
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