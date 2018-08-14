import React, { PureComponent } from 'react';
import { Card, Rate, Icon } from "antd";

class MovieItem extends PureComponent {
    render() {
        let title = this.props.title;
        if (title.length > 16) {
            title = title.substring(0, 14) + '....';
        }

        return (
            <Card bordered={false} style={{width: '20%', display: 'inline-block', textAlign: 'center'}}>
                <img onError={(e ,err) => console.log(e, err)} style={{width: '100%',minHeight: '168px'}}  src={this.props.imgurl} alt={title}/>
                <div>
                    <div style={{height: '40px'}}>
                        <span>{title}</span>
                    </div>
                    <Rate character={<Icon type='heart'/>} allowHalf disabled value={Math.round((this.props.rate/2)%0.5 === 0 ? this.props.rate/2 : Math.round(this.props.rate/2))} style={{fontSize: '10px', color: 'red',}} />
                    <br/>
                    <span>{this.props.rate}</span>
                    
                </div>
            </Card>
        );
    }
}

export default MovieItem;