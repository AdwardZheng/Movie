import React, { PureComponent } from 'react';
import { Icon } from 'antd';
import './AboutMe.css';

class About extends PureComponent {

    render() {
        const age = '年龄/23';
        const address = '';
        return (
            <div className='about'>
                <p className='title'>关于我</p>
                <div className='tag'>
                    <div className='tagItem'>
                        <span className='tagIcon'><Icon type={'profile'}/></span>
                        <p></p>
                    </div>
                    <div className='tagItem'>
                        <span className='tagIcon'><Icon type="environment-o"/></span>
                        <p>2</p>
                    </div>
                    <div className='tagItem'>
                        <span className='tagIcon'><Icon type="calendar"/></span>
                        <p>2</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;