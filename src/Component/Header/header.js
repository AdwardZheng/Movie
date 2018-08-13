import React, { PureComponent } from 'react';
import './Header.css';
import Nav from '../Nav/Nav';
import { PageContext } from "../../Context/context";

class Header extends PureComponent {
    render() {
        return (
            <PageContext.Consumer>
                {
                    context => 
                    <div className={'Header'}>
                        <div className={'title'}>
                            <div className={'logo'}>
                                <span>Just Blog</span>
                            </div>
                            <div>
                                <span className={'dsc'}>记录</span>
                            </div>
                        </div>
                        <Nav context={context} page={context.page} handleChangePage={this.props.handleChangePage} />
                    </div>
                }
            </PageContext.Consumer>
        );
    }
}

export default Header;