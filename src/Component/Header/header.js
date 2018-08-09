import React, { PureComponent } from 'react';
import './Header.css';
import Nav from '../Nav/Nav';

class Header extends PureComponent {
    render() {
        return (
            <div className={'Header'}>
                <div className={'title'}>
                    <div className={'logo'}>
                        <span>Just Blog</span>
                    </div>
                    <div>
                        <span className={'dsc'}>记录</span>
                    </div>
                </div>
                <Nav/>
            </div>
        );
    }
}

export default Header;