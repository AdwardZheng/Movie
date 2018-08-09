import  React, { PureComponent } from "react";
import './Sider.css';
import { Card } from "antd";
class Sider extends PureComponent {
    render() {
        // const header = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527245834290&di=2286cc7354adc925f79b92b719162dd4&imgtype=0&src=http%3A%2F%2Fpic32.photophoto.cn%2F20140828%2F0005018403917054_b.jpg';
        // const userIcon = 'http://img.qqzi.com/Content/Upload/2018/07/04/7bef27fa-35e0-470f-8797-3211aa597332.jpg';
        const Ionc = "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2792666611,2358009717&fm=27&gp=0.jpg";
        const bg = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533792001407&di=3fbb7124316ab38db2813908b482614e&imgtype=0&src=http%3A%2F%2Fp.laozu.com%2Flaozutu%2F2016dwy%2F20160527%2F2.jpg";

        return (
            <div className='sider' >
                <Card
                hoverable={true}
                className='card'
                cover={<img src={bg}/>}>
                    <div className='authorImg'>
                        <img src={Ionc} alt="1"/>
                    </div>
                    <Card.Meta
                        title={
                            <div><span className='card-title'>mingzi</span></div>
                        }
                        description={
                            <div>
                                <p>
                                    ssssssss
                                </p>
                                <p>
                                    <span>wenzhnag</span>
                                    <span>8</span>
                                    <span>fangwen</span>
                                    <span>9</span>
                                </p>
                            </div>
                        }
                    />
                </Card>
            </div>
        );
    }
}

export default Sider;