import React, { PureComponent } from 'react';
import Server from '../../Server/server.js';
import {Divider, Spin } from "antd";
import MovieItem from './MovieItem.js';

class Movie extends PureComponent {
    constructor() {
        super();

        this.state = {
            movies: [],
            willShowMovies: [],
        }

        Server.search({q: '一出好戏', start: 0}).then(result => {
            console.log(result);
            
        })
    }

    componentDidMount() {
        this.getInTheaterMovies();
        this.getWillShowMovies();
    }

    getInTheaterMovies() {
        Server.in_theater({
            start: 0,
            count: 9,
        }).then(result => {
            const movies = result.data.subjects;
            console.log(movies);
            this.setState({
                movies: movies,
            });
        });
    }

    getWillShowMovies() {
        Server.us_box({
            start: 0,
            count: 9,
        }).then(result => {
            const movies = result.data.subjects;
            console.log(movies);
            this.setState({
                willShowMovies: movies,
            });
        })
    }

    render() {

        return (
            <div>
                <div className={'topTitle'}>
                    <span>正在上映电影</span>
                </div>
                <Divider/>
                <div className='content'>
                    {
                        this.state.movies.length > 0 ? this.state.movies.map( (item, index) => (
                            <MovieItem key={index} rate={item.rating.average} imgurl={item.images.small} title={item.title}/>
                        )): <div style={{textAlign: 'center'}}><Spin size='large'/></div>
                    }
                </div>
                <div className={'topTitle'}>
                    <span>北美热门电影</span>
                </div>
                <Divider/>
                <div className='content'>
                    {
                       this.state.willShowMovies.length > 0 ? this.state.willShowMovies.map( (item, index) => (
                            <MovieItem key={index} rate={item.subject.rating.average} imgurl={item.subject.images.small} title={item.subject.title}/>
                        )) : <div style={{textAlign: 'center'}}><Spin  size='large'/></div>
                    }
                </div>
            </div>
        )
    }
}

export default Movie;