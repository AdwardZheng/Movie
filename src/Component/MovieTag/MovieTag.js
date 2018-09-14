import React, { PureComponent } from "react";
import { List } from 'antd';
import { Link } from "react-router-dom";
import Server from '../../Server/server';
import Loading from '../Common/loading.js';

class MovieTag extends PureComponent {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.getList(0);
    }

    render() {
        return (
        this.props.list.length === 0 ?
        <Loading title='加载中'/> :
        <List 
            header='top10'
            itemLayout="horizontal"
            dataSource={this.props.list.slice(0,10)}
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