import React, { Component } from "react";
import MovieItem from "../../Component/Movie/MovieItem";
import { Divider } from "antd";
import './index.css';
import LoadMore from '../../Component/Common/loadMore';
import Server from '../../Server/server';
import Loading from '../../Component/Common/loading';
import { PageContext } from "../../Context/context";
import {observer} from 'mobx-react';

@observer
class MovieComing extends Component {
    constructor(props) {
        super(props);
        this.props.handleUpdatePage('comingSoon');
    }

    componentDidMount() {
        this.getList();
    }

    handleLoadMore = () => {
        this.getList();
    }

    getList() {
        this.props.mobxStore.getList();
    }

    render() {
        return (
            <LoadMore handleLoadMore={this.handleLoadMore}>
                <div className='movieComing'>
                    <div className='topTitle'>
                        <span>即将上映: {this.props.mobxStore.comingList.length > 0 ? this.props.mobxStore.comingList[0].title:null}</span>
                    </div>
                    <Divider/>
                    <div className='content'>
                        {
                            this.props.mobxStore.loading
                            ? <Loading title="根据网络情况不同，可能会等待较长时间"/>
                            : this.props.mobxStore.comingList.map((item, index) => 
                            {
                                return (
                                    <MovieItem style={{display: 'inline-block'}} key={index} id={item.id} title={item.title} imgurl={item.images.small} rate={item.rating.average}/>
                                )
                            })
                        }
                        {this.props.mobxStore.loadMore ? <Loading title='加载中'/> : null}
                    </div>
                    <Divider/>
                </div>
            </LoadMore>
        );
    }
}

export default props =>
<PageContext.Consumer>
    {
        ({updatePage}) => (<MovieComing {...props} handleUpdatePage = {updatePage}/>)   
    }
</PageContext.Consumer>;