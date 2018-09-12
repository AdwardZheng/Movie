import React, { PureComponent } from 'react';
import { Link, NavLink } from "react-router-dom";
import './Nav.css';
import {Icon, Menu} from 'antd';
import {PageContext} from '../../Context/context.js';

class HeaderNav extends PureComponent {

    constructor() {
        super();

        this.state = {
            input: '',
        }
    }

    handleInput = e => {
        this.setState({
            input: e.target.value,
        });
    }

    handleClick = () => {
        console.log('重新设置handleChangeSearchName: ', this.state.input);
        // this.props.handleChangeSearchName(this.state.input);
    }

    render() {
        const { Item } = Menu;

        return (
            <PageContext.Consumer>
                {
                    context => (
                        <div style={{margin: '0 auto'}}>
                            <div className='menu' style={{display: 'inline-block'}}>
                                <Menu defaultSelectedKeys={['home']} selectedKeys={[context.page]} mode={'horizontal'}>
                                    <Item key='home' style={{padding: '0 10px'}}><NavLink to='/'>热映</NavLink></Item>
                                    <Item key='top250' style={{padding: '0 10px'}}><Link to='/movie/top250'>Top250</Link></Item>
                                    <Item key='comingSoon' style={{padding: '0 10px'}}><Link to='/movie/movieComing'>即将上映</Link></Item>
                                    <Item key='hot' style={{padding: '0 10px'}}>热门</Item>
                                </Menu>
                            </div>
                            <span className={'searchWrapper'}>
                                <input placeholder={'这里可以搜索电影哦'} value={this.state.input} onChange={this.handleInput} className={'search'} type="text"/>
                                <span onClick={ () => { context.updatePage('search'); this.handleClick()}}>
                                    <Link to={'/search/'+this.state.input}>
                                        <Icon className={'searchIcon'} type={'search'} />
                                    </Link>
                                </span>
                            </span>
                        </div>
                    )
                }
            </PageContext.Consumer>
        );
    }
}

export default HeaderNav;