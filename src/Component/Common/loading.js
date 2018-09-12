import React from 'react';
import {Spin} from 'antd';
export default function(props) {
    const title = props.title ?  props.title : '';
    return (
        <div style={{textAlign: 'center'}}><span>{title}</span><br/><Spin size='large'/></div>
    );
}