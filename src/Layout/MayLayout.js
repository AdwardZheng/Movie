import React, { PureComponent } from "react";
import { Layout } from "antd";
import MyHeader from "../Component/Header/header.js";
import MySider from "../Component/Sider/Sider.js";
import './style.css';

class MyLayout extends PureComponent {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    render() {
        const {Header, Content, Sider, Footer} = Layout;
        return(
            <Layout style={{height: '100%'}}>
                <Header style={{ backgroundColor: '#fff', padding: 0, height: 'auto'}}> 
                    <MyHeader handleChangeSearch={this.handleChangeSearch}/>
                </Header>
                <Layout>
                    <Content style={{ background: '#fff', padding: 24, minHeight: 900 }}>
                            {this.props.children}
                    </Content>
                    <Sider className='mySider' width={300} theme={'light'}>
                        <MySider/>
                    </Sider>
                </Layout>
                <Footer style={{textAlign: 'center', border: 0, padding: 0}}>
                    thanks for open source community@2018 By AZ
                </Footer>
            </Layout>
        );
    }
}

export default MyLayout;