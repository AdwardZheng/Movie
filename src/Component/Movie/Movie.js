import React, { PureComponent } from "react";
import { Tag, Card, Popover } from 'antd';
import Server from '../../Server/server';

class MovieTag extends PureComponent {
    constructor() {
        super();
        this.state = {
            movies: [],
        }
        Server.top250('post', {
            start: 0,
            count: 9,
        }).then(result => {
            const movies = result.data.subjects;

            this.setState({
                movies: movies,
            });
        });
    }

    render() {
        const content = (imgurl) => (<Card cover={<img style={{width: '100px', height: '120px'}} src={imgurl}/>}/>);
        const movieTag = (name, imgurl) => (
            <Popover key={name} placement='top' content={content(imgurl)}>
                <Tag style={{margin: '5px'}} color={'#f50'}>{name}</Tag>
            </Popover>
        );

        return (
            <div>
                <Card title={'Movies'} loading={!this.state.movies.length>0}>
                    {/* <Popover placement='topRight' content={content}>
                        <Tag style={{margin: 5}} color={'#f50'} >教父</Tag>
                    </Popover>
                    <Popover placement='top' content={content}>
                        <Tag style={{margin: 5}} placement='top' color={'#2db7f5'}>肖申克的救赎</Tag>
                    </Popover>
                    <Popover  content={content}>
                        <Tag style={{margin: 5}} color={'#87d068'}>辛德勒名单</Tag>
                    </Popover>
                    <Popover placement='top' content={content}>
                        <Tag style={{margin: 5}} color={'#108ee9'}>雨人</Tag>
                    </Popover>
                    <Popover placement='top' content={content}>
                        <Tag style={{margin: 5}} >穿条纹睡衣的男孩</Tag>
                    </Popover> */}
                    {
                        this.state.movies.map((item, index) => movieTag(item.title, item.images.small))
                    }
                </Card>
            </div>
        );
    }
}

export default MovieTag;