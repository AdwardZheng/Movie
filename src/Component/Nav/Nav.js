import React, { PureComponent } from 'react';
import './nav.css';
import Server from "../../Server/server";
import {Icon, Menu} from 'antd';


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

    handleSearch = () => {
        this.props.handleChangeSearch(this.state.input);
        this.props.handleChangePage('search');
    }

    render() {
        const { Item } = Menu;

        return (
                <div>
                    <Menu style={{marginLeft: '15%', maxWidth:'500px', display: 'inline-block'}} theme='dark' mode='horizontal'>
                        <Item key='1' onClick={() => this.props.handleChangePage('home')}>
                            <span><Icon type="home"/>主页</span>
                        </Item>
                        <Item key='2' onClick={() => this.props.handleChangePage('movie')}>
                            <span><Icon type="book"/>归档</span>
                        </Item>
                        <Item key='3' onClick={() => this.props.handleChangePage('home')}>
                            <span><Icon type="coffee"/>说说</span>
                        </Item>
                        <Item key='4' onClick={() => this.props.handleChangePage('movie')}>
                            <span><Icon type="solution"/>电影</span>
                        </Item>
                    </Menu>
                    <span className={'searchWrapper'}>
                        <input placeholder={'这里可以搜索电影哦'} value={this.state.input} onChange={this.handleInput} className={'search'} type="text"/>
                        <Icon className={'searchIcon'} type={'search'}  onClick={this.handleSearch}/>
                    </span>
                </div>
        );
    }
}

export default HeaderNav;