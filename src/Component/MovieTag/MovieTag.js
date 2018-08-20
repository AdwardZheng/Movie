import React, { PureComponent } from "react";
import { Tag, Card, Popover } from 'antd';
import Server from '../../Server/server';

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
        const content = (imgurl) => (<img style={{width: '100px', height: '120px'}} alt={'tag'} src={imgurl}/>);
        const movieTag = (name, imgurl) => (
            <Popover key={name} placement='top' content={content(imgurl)}>
                <Tag style={{margin: '5px'}} color={'#f50'}>{name}</Tag>
            </Popover>
        );

        return (
            <div>
                <Card title={'Movies'} loading={!this.state.movies.length>0}>
                    {
                        this.state.movies.map((item, index) => movieTag(item.title, item.images.small))
                    }
                </Card>
            </div>
        );
    }
}

export default MovieTag;