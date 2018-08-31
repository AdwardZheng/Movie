import React, { PureComponent } from 'react';
import { Icon } from 'antd';
import './AboutMe.css';

class About extends PureComponent {

    render() {
        const age = '年龄/23';
        const address = '地点/成都';
        const status = '状态/在职';
        return (
            <div className='about'>
                <p className='title'>关于我</p>
                <div className='tag'>
                    <div className='tagItem'>
                        <span className='tagIcon'><Icon type={'profile'}/></span>
                        <p>{age}</p>
                    </div>
                    <div className='tagItem'>
                        <span className='tagIcon'><Icon type="environment-o"/></span>
                        <p>{address}</p>
                    </div>
                    <div className='tagItem'>
                        <span className='tagIcon'><Icon type="calendar"/></span>
                        <p>{status}</p>
                    </div>
                </div>
                <div className='desc'>
                    <p>一年开发经验,主要从事h5游戏开发</p>
                    <p>自学前端及react相关技术栈</p>
                    <p>掌握面向对象及函数式编程</p>
                    <p>具备自学和独立解决问题的能力</p>
                    <p>喜欢新鲜技术和事物</p>
                </div>
            </div>
        )
    }
}

export default About;