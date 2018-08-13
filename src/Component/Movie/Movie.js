import React, { PureComponent } from 'react';
import Server from '../../Server/server.js';
import {Divider, Icon, Spin } from "antd";
import MovieItem from './MovieItem.js';

class Movie extends PureComponent {
    constructor() {
        super();

        this.state = {
            movies: [],
            willShowMovies: [],
        }
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
            console.log('正在上映：',result);
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
            console.log('即将上映：', result);
            this.setState({
                willShowMovies: movies,
            });
        })
    }

    render() {
        const imgurl = 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2524056711.jpg';
        const cardStyle = {
            // maxWidth: '180px',
            width: '20%',
            border: 'none',
        }

        return (
            <div>
                <div className={'topTitle'}>
                    <span>最近热门电影</span>
                </div>
                <Divider/>
                <div className='content'>
                    {/* <Card title='ssss'>
                        <Card.Grid style={cardStyle}>
                            <img src={imgurl} style={{width: '100%'}} alt="魔女"/>
                        </Card.Grid>
                        <Card.Grid style={cardStyle}>
                            <img src={imgurl} style={{width: '100%'}} alt="魔女"/>
                        </Card.Grid>
                        <Card.Grid style={cardStyle}>
                            <img src={imgurl} style={{width: '100%'}} alt="魔女"/>
                        </Card.Grid>
                        <Card.Grid style={cardStyle}>
                            <img src={imgurl} style={{width: '100%'}} alt="魔女"/>
                        </Card.Grid>
                        <Card.Grid style={cardStyle}>
                            <img src={imgurl} style={{width: '100%'}} alt="魔女"/>
                        </Card.Grid>
                    </Card> */}
                    {/* <Card bordered={false} style={{width: '20%'}} >
                        <img src={imgurl} style={{width: '100%'}}/>
                        <div>
                            <span>
                                魔女
                            </span>
                            <Rate character={<Icon type='heart'/>} allowHalf disabled value={4.2} style={{fontSize: '10px', color: 'red'}} />
                        </div>
                    </Card> */}
                    {
                        this.state.movies.length > 0 ? this.state.movies.map( (item, index) => (
                            <MovieItem key={index} rate={item.rating.average} imgurl={item.images.small} title={item.title}/>
                        )): <div style={{textAlign: 'center'}}><Spin size='large'/></div>
                    }
                </div>
                <div className={'topTitle'}>
                    <span>最近热门电影</span>
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