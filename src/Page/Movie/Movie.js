import React, { PureComponent } from 'react';
import Server from '../../Server/server.js';
import {Divider } from "antd";
import MovieItem from '../../Component/Movie/MovieItem.js';
import Loading from '../../Component/Common/loading';
import { PageContext } from "../../Context/context";
import './index.css';

class Movie extends PureComponent {
    constructor(props) {
        super(props);
        this.props.handleUpdatePage('home');
    }

    componentDidMount() {
        if(this.props.inTheaterList.length === 0) {
            this.getInTheaterMovies();
        }
        if(this.props.inUSTheaterList.length === 0) {
            this.getUSMovie();
        }
    }

    componentDidUpdate() {

    }

    getInTheaterMovies() {
        Server.in_theater({
            start: 0,
            count: 9,
        }).then(result => {
            const movies = result.data.subjects;
            if (movies) {
                this.props.onUpdateHandle(movies);
            }
        });
    }

    getUSMovie() {
        Server.us_box({
            start: 0,
            count: 9,
        }).then(result => {
            const movies = result.data.subjects;
            if (movies) {
                this.props.onUpdateUSHandle(movies);
            }
        })
    }

    render() {

        return (
            <div className='movie'>
                <div className={'topTitle'}>
                    <span>正在上映电影</span>
                </div>
                <Divider/>
                <div className='content'>
                    {
                        this.props.inTheaterList.length > 0 ? this.props.inTheaterList.map( (item, index) => (
                            <MovieItem  key={index} id={item.id} rate={item.rating.average} imgurl={item.images.small} title={item.title}/>
                        )): <Loading/>
                    }
                </div>
                <div className={'topTitle'}>
                    <span>北美热门电影</span>
                </div>
                <Divider/>
                <div className='content'>
                    {
                       this.props.inUSTheaterList.length > 0 ? this.props.inUSTheaterList.map( (item, index) => (
                            <MovieItem key={index} id={item.subject.id} rate={item.subject.rating.average} imgurl={item.subject.images.small} title={item.subject.title}/>
                        )) : <Loading/>
                    }
                </div>
            </div>
        )
    }
}

export default props =>
<PageContext.Consumer>
    {
        ({updatePage}) => (<Movie {...props} handleUpdatePage = {updatePage}/>)   
    }
</PageContext.Consumer>;