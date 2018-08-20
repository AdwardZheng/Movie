import  React, { PureComponent } from "react";
import './Sider.css';
import Person from '../PersonDsc/Person.js';
import MovieTag from "../MovieTag/MovieTag.js";
import Skills from "../Skills/Skills.js";
class Sider extends PureComponent {

    render() {
        // const header = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527245834290&di=2286cc7354adc925f79b92b719162dd4&imgtype=0&src=http%3A%2F%2Fpic32.photophoto.cn%2F20140828%2F0005018403917054_b.jpg';
        // const userIcon = 'http://img.qqzi.com/Content/Upload/2018/07/04/7bef27fa-35e0-470f-8797-3211aa597332.jpg';

        return (
            <div className='sider' >
                <Person/>
                <MovieTag/>
                <Skills/>
            </div>
        );
    }
}

export default Sider;