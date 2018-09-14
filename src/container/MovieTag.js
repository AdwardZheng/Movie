import { connect } from "react-redux";
import MovieTag from "../Component/MovieTag/MovieTag";
import { getTop250List } from '../actions/movieAction';

const mapStateToProps = state => {
    return {
        list: state.Top250.top250List,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getList: start => dispatch(getTop250List())
    }
}

const MyMovieTag = connect(mapStateToProps, mapDispatchToProps)(MovieTag);

export default MyMovieTag;