import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Layout } from "antd";
import MyHeader from './Component/Header/header'
import MyContent from './Component/Content/Content.js';
import MySider from './Component/Side/Sider.js';


class MyApp extends Component {
    constructor() {
        super();

        this.state = {
            collapsed: false,
        }
    }

    onCollapse = (collapsed, type) => {
        console.log(type);
        this.setState({
            collapsed: collapsed,
        });
    }

    render() {
        const {Header, Sider, Footer, Content} = Layout;
        return (
            <div className="App">
                <Layout>
                    <Header style={{height: '160px'}}> 
                        <MyHeader/>
                    </Header>
                    <Layout>
                        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                            <MyContent/>
                        </Content>
                        <Sider style={{marginRight: '100px'}} width={300} theme={'light'} onCollapse={this.onCollapse} collapsed={this.state.collapsed}>
                            <MySider collapsed={this.state.collapsed}/>
                        </Sider>
                    </Layout>
                    <Footer style={{textAlign: 'center', border: 0, padding: 0}}>
                        thans for open source community@2018 By EZ
                    </Footer>
                </Layout>
            </div>
        );
    }
}

export default MyApp;