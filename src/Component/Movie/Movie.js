import React, { PureComponent } from "react";
import { Tag, Card, Popover } from 'antd';

class MovieTag extends PureComponent {
    constructor() {
        super();
    }

    render() {
        const imgurl = "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=291050453,4137308055&fm=58&bpow=450&bpoh=600";
        const imgurl2 = "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2504669013,2923264388&fm=58&bpow=933&bpoh=1388";

        const content = (
            
            <Card cover={<img style={{minWidth: '100px', height: '100px'}} src={imgurl}/>}>
            </Card>
          );
        const content2 = (
        <img style={{ width: '100px',height: '100px'}} src={imgurl2}/>
        );

        return (
            <div>
                <Card title={'Movies'} style={{width: 400, margin: '0 auto'}}>
                    <Popover placement='topRight' content={content}>
                        <Tag style={{margin: 5}} color={'#f50'} >教父</Tag>
                    </Popover>
                    <Popover placement='top' content={content2}>
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
                    </Popover>
                    <Popover placement='top' content={content}>
                        <Tag style={{margin: 5}} >穿条纹睡衣的男孩</Tag>
                    </Popover>
                    <Popover placement='top' content={content}>
                        <Tag style={{margin: 5}} >穿条纹睡衣的男孩</Tag>
                    </Popover>
                    <Popover placement='top' content={content}>
                        <Tag style={{margin: 5}} >穿条纹睡衣的男孩</Tag>
                    </Popover>
                    <Popover placement='top' content={content}>
                        <Tag style={{margin: 5}} >穿条纹睡衣的男孩</Tag>
                    </Popover>
                    <Popover placement='top' content={content}>
                        <Tag style={{margin: 5}} >穿条纹睡衣的男孩</Tag>
                    </Popover>
                </Card>
            </div>
        );
    }
}

export default MovieTag;