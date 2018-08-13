import React, { PureComponent } from 'react';
import { Card, Rate, Icon } from "antd";

class MovieItem extends PureComponent {
    render() {
        return (
            <Card bordered={false} style={{width: '20%', display: 'inline-block', textAlign: 'center'}}>
                <img style={{width: '100%',minHeight: '168px'}}  src={this.props.imgurl} alt={this.props.title}/>
                <div>
                    <div style={{height: '40px'}}>
                        <span>{this.props.title}</span>
                    </div>
                    <Rate character={<Icon type='heart'/>} allowHalf disabled value={this.props.rate/2} style={{fontSize: '10px', color: 'red',}} />
                    <br/>
                    <span>{this.props.rate}</span>
                    
                </div>
            </Card>
        );
    }
}

export default MovieItem;