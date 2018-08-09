import React, { PureComponent } from 'react';
import './nav.css';
import {Icon} from 'antd';

class HeaderNav extends PureComponent {
    render() {
        return (
            <div className={'headerNav'}>
                <div className={'nav'}>
                    <div className={'item'}>
                        <span><Icon type="home"/>主页</span>
                    </div>
                    <div className={'item'}>
                        <span><Icon type={'book'}/> 归档</span>
                    </div>
                    <div className={'item'}>
                        <span><Icon type={'coffee'}/> 说说</span>
                    </div>
                    <div className={'item'}>
                        <span><Icon type={'solution'}/> 收藏</span>
                    </div>
                    <span className={'searchWrapper'}>
                        <input placeholder={'请输入内容'} className={'search'} type="text"/>
                        <Icon className={'searchIcon'} type={'search'}/>
                    </span>
                </div>
            </div>
        );
    }
}

export default HeaderNav;