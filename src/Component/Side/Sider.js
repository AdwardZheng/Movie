import  React, { PureComponent } from "react";
import './Sider.css';
import MovieTag from "../../container/MovieTag";
class Sider extends PureComponent {
    render() {
        return (
            <div className='sider' >
                <MovieTag/>
            </div>
        );
    }
}

export default Sider;