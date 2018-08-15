import React, { PureComponent } from "react";
import JSON from '../../data/index.js';
import { Card } from "antd";

class Home extends PureComponent {

    render() {
        const data = JSON['data'];
        return data['articleList'].map((item, index) => (
            <Card 
                key={index}
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
            </Card>))
    }
}

export default Home;