import React, { PureComponent } from 'react';
import { Icon } from 'antd';
import './AboutMe.css';

class About extends PureComponent {

    render() {
        return (
            <div className='about'>
                <p className='title'>ABB</p>
                <div className='tag'>
                    <div className='tagItem'>
                        <span className='tagIcon'><Icon type={'profile'}/></span>
                        <p>2</p>
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