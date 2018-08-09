import React ,{ PureComponent } from "react";
import './Content.css';
import { Card } from "antd";

class Content extends PureComponent {
    render() {
        return (
            <div style={{width: 800, position: 'relative', float: 'left', marginLeft: '200px', marginTop: '50px'}}>
                {
                    [1,2,3,4,5,6,7].map((item, index) => (
                        <Card 
                        key={'1'}
                        bordered={false}
                        hoverable={true}
                        className={"article"}
                        type="inner">
                        <div>
                            <h3>标题</h3>
                            <p className={"tag"}>
                                <span>发表于：XX</span>
                                <span>标签：XX</span>
                                <span>浏览：XX</span>
                            </p>
                            <a href="javascript:;"><span>......</span></a>
                        </div>
                    </Card>
                    )
                )
                }
            </div>
        );
    }
}
export default Content;