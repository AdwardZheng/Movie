import React, { PureComponent } from "react";
import { Timeline, Icon, Spin,  } from 'antd';
import './say.css';

class Say extends PureComponent {

    render() {
        // const {Item} = Timeline;
        const Item = Timeline.Item;
        return (
            <div className={'sayContainer'}>
                <Timeline>
                    {
                        [1, 2, 3].map((item, index) => {
                            return (
                                <Item key={index}>
                                    <div className='item'>
                                        <div className="content">
                                            <p>ergragreag个人隔热管他人给他任何一天他任何一天就会有同居个人隔热管他人给他任何一天就会有同居也可以看看已经提交人ergragreag个人隔热管他人给他任何一天就会有同居也可以看看已经提交人</p>
                                        </div>
                                        <span>发表于： ‘司法所的范德萨发的身份问题’</span>
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