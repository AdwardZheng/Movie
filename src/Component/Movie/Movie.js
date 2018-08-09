import React, { PureComponent } from "react";
import { Tag, Card } from 'antd';

class MovieTag extends PureComponent {
    constructor() {
        super();
    }

    render() {
        return (
            <div style={{marginTop: '50px'}}>
                <Card title={'Movies'} style={{width: 300}}>
                    <Tag style={{margin: 5}} color={'#f50'} >教父</Tag>
                    <Tag style={{margin: 5}} color={'#2db7f5'}>肖申克的救赎</Tag>
                    <Tag style={{margin: 5}} color={'#87d068'}>辛德勒名单</Tag>
                    <Tag style={{margin: 5}} color={'#108ee9'}>雨人</Tag>
                    <Tag style={{margin: 5}} >穿条纹睡衣的男孩</Tag>
                </Card>
            </div>
        );
    }
}

export default MovieTag;