import React ,{ PureComponent } from "react";
import './Content.css';
import { Card } from "antd";
import JSON from '../../data/index.js';

class Content extends PureComponent {
    render() {
        const data = JSON['data'];
        console.log(data);
        return (
            <div style={{width: 800, margin: '0 auto'}}>
                {
                    data['articleList'].map((item, index) => (
                        <Card 
                        key={'1'}
                        bordered={false}
                        hoverable={true}
                        className={"article"}
                        type="inner">
                        <div>
                            <h3>{item['title']}</h3>
                            <p className={"tag"}>
                                <span>发表于：XX</span>
                                <span>标签：XX</span>
                                <span>浏览：XX</span>
                            </p>
                            <a href="javascript:;"><span>{item['desc']}</span></a>
                        </div>
                    </Card>
                    ))
                }
            </div>
        );
    }
}
export default Content;