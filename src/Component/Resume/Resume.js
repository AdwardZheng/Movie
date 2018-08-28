import React, {PureComponent} from 'react';
import './Resume.css';

class Resume extends PureComponent {
    render() {
        const header = "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2792666611,2358009717&fm=27&gp=0.jpg";
        return (
            <div className='resumeHeader'>
                <img className='img' src={header} alt="me" key="img"/>
                <p className={'title'}>
                    世界因计算机而美好，我们则使这个世界更加绚烂
                </p>
                <div className='split'/>
                <p>我是AZ</p>
                <p>一名js游戏开发者</p>
                <p>前端那日新月异的变化既是其缺陷也是其迷人之处</p>
            </div>
        );
    }
}

export default Resume;