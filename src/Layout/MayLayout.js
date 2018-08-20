import React, { PureComponent } from "react";
import { Layout } from "antd";
import MyHeader from "../Component/Header/header.js";
import MySider from "../Component/Side/Sider.js";

class MyLayout extends PureComponent {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    render() {
        const {Header, Content, Sider, Footer} = Layout;
        return(
            <Layout style={{height: '100%'}}>
                <Header style={{height: '160px'}}> 
                    <MyHeader handleChangeSearch={this.handleChangeSearch}/>
                </Header>
                <Layout>
                    <Content style={{ background: '#fff', padding: 24, marginLeft: '100px', minHeight: 900 }}>
                        <div style={{width: 800, margin: '0 auto'}}>
                            {this.props.children}
                        </div>
                    </Content>
                    <Sider style={{marginRight: '100px'}} width={300} theme={'light'}>
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