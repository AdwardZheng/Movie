import React, {PureComponent} from 'react';
import './Undergo.css';
import logo from '../../logo.svg';

class Undergo extends PureComponent {

    render() {
        return (
            <div className='undergo'>
                <p className='title'>经历</p>
                <div className='card'>
                    <img className='react' src={logo} alt="react"/>
                    <div className='cardRight'>
                        <p className='cardTitle'></p>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <ul>
                            <li><span>4</span></li>
                            <li><span>5</span></li>
                            <li><span>6</span></li>
                            <li><span>7</span></li>
                        </ul>
                    </div>
                </div>

                <div className='card'>
                    <img className='react' src={logo} alt="react"/>
                    <div className='cardRight'>
                        <p className='cardTitle'></p>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <ul>
                            <li><span>4</span></li>
                            <li><span>5</span></li>
                            <li><span>6</span></li>
                            <li><span>7</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Undergo;