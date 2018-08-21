import React, { PureComponent } from "react";
import { Timeline} from 'antd';
import './say.css';

class Say extends PureComponent {

    render() {
        // const {Item} = Timeline;
        const Item = Timeline.Item;
        return (
            <div className={'sayContainer'}>
                <Timeline pending={'还在添砖加瓦中'}>
                    {
                        [1, 2, 3].map((item, index) => {
                            return (
                                <Item key={index}>
                                    <div className='item'>
                                        <div className="content">
                                            <p>这是一个使用react构建的小页面，有时会随便添加点小东西</p>
                                        </div>
                                        <span>发表于： XXX-XXX-XXX</span>
                                    </div>
                                </Item>
                            );
                        })
                    }
                </Timeline>
            </div>
        )
    }
}

export default Say;