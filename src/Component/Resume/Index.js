import React, { PureComponent } from 'react';
import { Icon,Carousel } from 'antd';

import { Link } from 'react-router-dom';
import "./Index.css";
import About from './AboutMe.js';
import Resume from './Resume.js';
import Skills from './SKills.js';
import Undergo from './Undergo.js';
import Connect from './ConnectMe.js';

class Index extends PureComponent {
    constructor() {
        super();
        this.state = {
            currentPage: 0,
        }
    }

    handleWhell = (e) => {
        if (e.deltaY > 0) {
            this.carousel.next();
        } 
        if (e.deltaY < 0) {
            this.carousel.prev();
        }
    }

    handleCurrentPage = (current) => {
        this.setState({
            currentPage: current
        });
        console.log(current);
    }

    render() {
        const header = "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2792666611,2358009717&fm=27&gp=0.jpg";
        const dotList =['#85ada3','#0e8d82','#4b5b8a','#925b4b','#48829c',];
        return (
            <div className='resume'>
                <Carousel afterChange={this.handleCurrentPage} ref={carousel => this.carousel = carousel} infinite={false} vertical dots={false}>                    
                    <div onWheel={this.handleWhell}>
                        <Resume/>
                    </div>
                    <div onWheel={this.handleWhell}>
                        <About/> 
                    </div>  
                    <div onWheel={this.handleWhell}>
                        <Skills/>
                    </div>
                    <div onWheel={this.handleWhell}>
                        <Undergo/>
                    </div>
                    <div onWheel={this.handleWhell}>
                        <Connect/>
                    </div>
                </Carousel>
                <div className='dots'>
                {
                    dotList.map((item, index) => {
                        return(
                            <Icon onClick={() => this.carousel.goTo(index)} 
                                style={{color: item}}
                                className={ this.state.currentPage === index ? 'curItem': 'dotItem'} type='heart' />
                        );
                    })
                }
                </div>
                {this.state.currentPage < 3 ? <Icon onClick={() => {this.carousel.next()}} className="next" type='up'/> : null}
                <Link to="/"><img className={'headerIcon'} src={header} alt="header"/></Link>
            </div>
            
        );
    }
}

export default Index;