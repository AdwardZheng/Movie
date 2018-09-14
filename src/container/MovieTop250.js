import { connect } from 'react-redux';
import {getTop250List, logingTop250, loadMoreTop250} from '../Actions/movieAction';
import MovieComponent from '../Page/MovieTop250/MovieTop';


const mapStateToProps = state => {
    return {
        Top250List: state.Top250.top250List,
        Top250End: state.Top250.top250End,
        loading: state.Top250.loading,
        loadMore: state.Top250.loadMore,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getList: end => {
            dispatch(getTop250List(end));
        } ,
        changeLoading: loading => {
            dispatch(logingTop250(loading));
        },
        changeLoadMore: loadMore => {
            dispatch(loadMoreTop250(loadMore));
        }
    }
}

const MovieTop250 = connect(
    mapStateToProps,
    mapDispatchToProps,
)(MovieComponent)

export default MovieTop250;