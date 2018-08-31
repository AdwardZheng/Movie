import React, { PureComponent } from "react";
import { Tag, Card } from 'antd';

class Skills extends PureComponent {
    constructor() {
        super();
        this.state = {
            skills: [
                {color: '#f50', name: 'react'},
                {color: '#2db7f5', name: 'react-router'},
                {color: '#87d068', name: 'es6'},
                {color: '#108ee9', name: 'antd'},
                {color: '#ffa500', name: 'java'},
            ]
        }
    }

    render() {

        return (
            <div style={{marginTop: '20px'}}>
                <Card title={'Skills'}>
                    {
                        this.state.skills.map((item, index) => <Tag key={index} style={{margin:'5px'}} color={item.color}>{item.name}</Tag>)
                    }
                </Card>
            </div>
        );
    }
}

export default Skills;