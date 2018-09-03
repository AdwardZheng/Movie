import React, {PureComponent} from 'react';
import './Undergo.css';
import logo from '../../logo.svg';

class Undergo extends PureComponent {

    render() {
        return (
            <div className='undergo'>
                <p className='title'>经历</p>
                <div className='card'>
                    <img className='react' src={logo} alt="react"/>
                    <div className='cardRight'>
                        <p className='cardTitle'>成都哆可梦网络科技有限公司</p>
                        <div>2017年4月~2017年7月</div>
                        <div>Unity客户端实习生</div>
                        <div>unity,C#,Lua</div>
                        <ul>
                            <li><span>负责部分UI的拼接和功能实现</span></li>
                            <li><span>正式接触工业级别的编程，熟悉了Unity和开发流程</span></li>
                            <li><span>获得了一定多平台和多语言开发经验</span></li>
                        </ul>
                    </div>
                </div>

                <div className='card'>
                    <img className='react' src={logo} alt="react"/>
                    <div className='cardRight'>
                        <p className='cardTitle'>成都次世代科技有限公司（沃游戏互动）</p>
                        <div>2017年7月~至今</div>
                        <div>h5游戏开发工程师</div>
                        <div>JS,AS,Laya,Java,Cocos,h5游戏开发</div>
                        <ul>
                            <li><span>独立负责单个棋牌游戏的开发任务及部分周边系统</span></li>
                            <li><span>负责Android平台的SDK接入,如微信SDK,实现微信授权登陆;openInstall接入,实现用户统计</span></li>
                            <li><span>同时学习web前端和后端，如Spring，react</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Undergo;