import React, { PureComponent } from 'react';
import { Tooltip, Icon } from 'antd';
import './Connect.css';
import QRCode from '../../img/QRcode.jpg';
import { height } from 'window-size';

class Connect extends PureComponent {

    render() {
        const email = 'panzhengpan@163.com'
        return (
            <div className='connectMe'>
                <p className='title'>联系我</p>
                <div className='tag'>
                    <span>代码</span>
                    <span>未来</span>
                    <span>梦想</span>
                </div>
                <p> 无论是游戏开发还是前端,变的是引擎和语言,不变的是对编程的热爱</p>
                <p> 乐于尝试,新的轮子和技术总是那么令人激动</p>
                <p> 喜欢这个日新月异的世界和互联网 </p>
                <p> 愿为互联网贡献自己的一份力 </p>
                <div className='connect'>
                    <Tooltip className='item' title={email}>
                        <Icon type='mail'/>
                    </Tooltip>
                    <Tooltip className='item' title={<img style={{width: '160px', height: '200px'}} src={QRCode} alt="微信"/>}>
                        <Icon type='wechat'/>
                    </Tooltip>
                </div>
            </div>
        );
    }
}

export default Connect;