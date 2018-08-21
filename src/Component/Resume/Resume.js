import React, {PureComponent} from 'react';
import './Resume.css';

class Resume extends PureComponent {
    render() {
        const header = "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2792666611,2358009717&fm=27&gp=0.jpg";
        return (
            <div className='resumeHeader'>
                <img className='img' src={header} alt="me" key="img"/>
                <p className={'title'}>
                    Just do it
                </p>
                <div className='split'/>
                <p>it all is</p>
                <p>all it is</p>
                <p>it is all</p>
            </div>
        )
    }
}

export default Resume;