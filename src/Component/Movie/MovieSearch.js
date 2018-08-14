import React, { PureComponent } from "react";
import MovieItem from "./MovieItem";
import { Divider, Spin } from "antd";
import { SearchContext } from "../../Context/context";
import Server from '../../Server/server';

class MovieSearch extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            ...props,
            movieList: [],
        };
        console.log(this.state);
    }

    componentDidMount() {
        this.getSearchList();
    }

    getSearchList() {
        Server.search({start: 0, q: this.state.searchName}).then(result => {
            console.log(result);
            this.setState({
                movieList: result.data.subjects,
            });
        });
    }

    render() {
        console.log(this.state.searchName);
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
                        : <div style={{textAlign: 'center'}}><Spin size='large'/></div>
                        
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