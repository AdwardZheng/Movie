import React, { PureComponent } from 'react';
import './Header.less';
import Nav from '../Nav/Nav';

class Header extends PureComponent {
    render() {
        return (
            <div className={'Header'}>
                <div className={'title'}>
                    <div className={'logo'}>
                        <span>电影</span>
                    </div>
                    <span className={'dsc'}>豆瓣</span>
                </div>
                <Nav handleChangeSearch = {this.props.handleChangeSearch}/>
            </div>
        );
    }
}

export default Header;