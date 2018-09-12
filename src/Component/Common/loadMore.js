import React, { PureComponent } from 'react';

class LoadMore extends PureComponent {

    hadnleLoadMore = (e) => {
        if(e.deltaY < 0) return;
        if((document.documentElement.clientHeight + document.documentElement.scrollTop) >= document.documentElement.scrollHeight) {
            this.props.handleLoadMore();
        }
    }

    render() {
        return (
            <div onWheel={this.hadnleLoadMore} onTouchMove={this.hadnleLoadMore}>
                {this.props.children}
            </div>
        )
    }
}

export default LoadMore;