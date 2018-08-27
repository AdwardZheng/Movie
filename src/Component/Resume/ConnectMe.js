import React, { PureComponent } from 'react';
import { Tooltip, Icon } from 'antd';
import './ConnectMe.css';

class Connect extends PureComponent {

    render() {
        const email = 'XXXX@qq.com'
        return (
            <div className='connectMe'>
                <p className='title'>联系我</p>
                <div className='tag'>
                    <span>代码</span>
                    <span>未来</span>
                    <span>梦想</span>
                </div>
                <p> 善于自学，Unity,Laya,CocosCreator,变的是引擎和语言，不变的是对编程的热爱</p>
                <p> 乐于尝试，Js,C#,Java,Lua,As,最好的一定是最合适的</p>
                <p> 喜欢这个日新月异的世界和互联网 </p>
                <p> 愿和良师益友一起去看看更大的世界 </p>
                <div className='connect'>
                    <Tooltip className='item' title={email}>
                        <Icon type='mail'/>
                    </Tooltip>
                    <Tooltip className='item' title={<img src={''} alt="微信"/>}>
                        <Icon type='wechat'/>
                    </Tooltip>
                </div>
            </div>
        );
    }
}

export default Connect;