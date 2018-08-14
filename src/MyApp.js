import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Layout } from "antd";
import MyHeader from './Component/Header/header'
import MyContent from './Component/Content/Content.js';
import MySider from './Component/Side/Sider.js';
import { PageContext, SearchContext } from "./Context/context";

class MyApp extends Component {
    constructor() {
        super();

        this.state = {
            collapsed: false,
            page: 'home',
            searchName: '',
        }
    }

    onCollapse = (collapsed, type) => {
        this.setState({
            collapsed: collapsed,
        });
    }

    handleChangePage = page => {
        this.setState({
            page: page,
        });
    }

    handleChangeSearch = name => {
        // this.setState({
        //     searchName: name,
        // });
        this.setState(preState => {
            console.log(name);
            return ({
                searchName: name
            });
        });
    }

    render() {
        const {Header, Sider, Footer, Content} = Layout;
        return (
            <PageContext.Provider value={{page: this.state.page}}>
                <SearchContext.Provider value={{searchName: this.state.searchName}}>
                    <div className="App">
                        <Layout>
                            <Header style={{height: '160px'}}> 
                                <MyHeader handleChangeSearch={this.handleChangeSearch} handleChangePage={this.handleChangePage}/>
                            </Header>
                            <Layout>
                                <Content style={{ background: '#fff', padding: 24, marginLeft: '100px', minHeight: 280 }}>
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
                </SearchContext.Provider>             
            </PageContext.Provider>
        );
    }
}

export default MyApp;