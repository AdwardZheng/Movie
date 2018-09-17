import  React, { PureComponent } from "react";
import './Sider.less';
import MovieTag from "../../Container/MovieTag";
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