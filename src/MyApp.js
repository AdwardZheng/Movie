import React, { Component } from 'react';
import Header from './Component/Header/header'
import 'antd/dist/antd.css';
import Content from './Component/Content/Content.js';
import Sider from './Component/Side/Sider.js';
import './index.css';

class MyApp extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Content/>
                <Sider/>
            </div>
        );
    }
}

export default MyApp;