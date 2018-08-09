import React, { PureComponent } from 'react';
import './nav.css';
import {Icon, Menu} from 'antd';


class HeaderNav extends PureComponent {
    render() {
        const { Item } = Menu;

        const testItem = <div className={'headerNav'}>
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

        return (
            <div>
                <Menu style={{marginLeft: '15%', maxWidth:'500px', display: 'inline-block'}} theme='dark' mode='horizontal'>
                    <Item key='1'>
                        <span><Icon type="home"/>主页</span>
                    </Item>
                    <Item key='2'>
                        <span><Icon type="book"/>归档</span>
                    </Item>
                    <Item key='3'>
                        <span><Icon type="coffee"/>说说</span>
                    </Item>
                    <Item key='4'>
                        <span><Icon type="solution"/>收藏</span>
                    </Item>
                </Menu>
                <span className={'searchWrapper'}>
                    <input placeholder={'请输入内容'} className={'search'} type="text"/>
                    <Icon className={'searchIcon'} type={'search'}/>
                </span>
            </div>
        );
    }
}

export default HeaderNav;