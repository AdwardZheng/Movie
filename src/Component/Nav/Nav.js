import React, { PureComponent } from 'react';
import { Link } from "react-router-dom";
import './nav.css';
import {Icon, Menu} from 'antd';
import {SearchContext} from '../../Context/context.js';

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
        this.props.handleChangeSearchName(this.state.input);
    }

    render() {
        const { Item } = Menu;

        return (
                <div>
                    <Menu defaultSelectedKeys={['1']} style={{marginLeft: '15%', maxWidth:'500px', display: 'inline-block'}} theme='dark' mode='horizontal'>
                        <Item key='1'>
                            <Link to={'/home'}>
                                <span><Icon type="home"/>主页</span>
                            </Link>
                        </Item>
                        <Item key='2'>
                            <span><Icon type="book"/>归档</span>
                        </Item>
                        <Item key='3'>
                            <span><Icon type="coffee"/>说说</span>
                        </Item>
                        <Item key='4'>
                            <Link to={'/movie'}>
                                <span><Icon type="solution"/>电影</span>
                            </Link>
                        </Item>
                    </Menu>
                    <span className={'searchWrapper'}>
                        <input placeholder={'这里可以搜索电影哦'} value={this.state.input} onChange={this.handleInput} className={'search'} type="text"/>
                        <Link to={'/search/'+this.state.input}>
                            <Icon className={'searchIcon'} type={'search'} onClick={this.handleClick}/>
                        </Link>
                    </span>
                </div>
        );
    }
}

export default (
    props => (
        <SearchContext.Consumer>
            {
                context => (
                    <HeaderNav {...props} handleChangeSearchName = {context.updateSearchName} searchName = {context.searchName}/>
                )
            }
        </SearchContext.Consumer>
    )
);