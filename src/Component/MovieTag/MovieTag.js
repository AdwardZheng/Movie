import React, { PureComponent } from "react";
import { List } from 'antd';
import { Link } from "react-router-dom";
import Server from '../../Server/server';
import Loading from '../Common/loading.js';

class MovieTag extends PureComponent {
    constructor() {
        super();
        this.state = {
            movies: [],
        }
        Server.top250({
            start: 0,
            count: 9,
        }).then(result => {
            const movies = result.data.subjects;
            if (movies) {
                this.setState({
                    movies: movies,
                });
            }
        });
    }

    render() {
        return (
        this.state.movies.length === 0 ?
        <Loading title='加载中'/> :
        <List 
            header='top10'
            itemLayout="horizontal"
            dataSource={this.state.movies}
            renderItem = {
                item => {
                    return (
                        <List.Item>
                            <Link to={`/movie/${item.id}`}>
                                <List.Item.Meta
                                    avatar={<img alt='封面' style={{width:'50px', height:'60px'}} src={item.images.small}/>}
                                    description={item.title}
                                />
                            </Link>
                        </List.Item>
                    )
                }
            }/>)
    }
}

export default MovieTag;