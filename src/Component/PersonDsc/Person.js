import React, { PureComponent } from 'react';
import { Card, Tooltip, Icon } from 'antd';
import { Link } from "react-router-dom";
import './Person.css';

class Person extends PureComponent {

    render() {
        const header = "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2792666611,2358009717&fm=27&gp=0.jpg";
        const bg = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533792001407&di=3fbb7124316ab38db2813908b482614e&imgtype=0&src=http%3A%2F%2Fp.laozu.com%2Flaozutu%2F2016dwy%2F20160527%2F2.jpg";

        return (
            <div>
                <Card
                    hoverable={true}
                    className='card'
                    cover={<img src={bg} alt={'bg'}/>}>
                    <div className='authorImg'>
                        <img src={header} alt="1"/>
                    </div>
                    <Card.Meta
                        title={
                            <div><span className='card-title'>AdwardZ</span></div>
                        }
                        description={
                            <div>
                                <p>
                                    一名js开发者
                                </p>
                                <p>
                                    <span>依然行走在路上</span>
                                </p>
                                <Tooltip title={'github'}>
                                    <a style={{color: 'rgba(0,0,0,0.65)'}} href="https://github.com/AdwardZheng"><Icon style={{fontSize: '25px'}} type='github'/></a>
                                </Tooltip>
                                <Tooltip title={'简历'}>
                                <Link to="/resume" style={{color: 'rgba(0,0,0,0.65)', marginLeft: '5px'}} href="https://github.com/AdwardZheng"><Icon style={{fontSize: '25px'}} type='solution'/></Link>
                                </Tooltip>
                            </div>
                        }
                    />
                </Card>
            </div>
        )
    }
}

export default Person;