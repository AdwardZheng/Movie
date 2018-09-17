import { connect } from "react-redux";
import MovieTag from "../Component/MovieTag/MovieTag";
import { getTop250List } from '../Actions/movieAction';

const mapStateToProps = state => {
    return {
        list: state.Top250.top250List,
        end: state.Top250.top250End,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getList: end => dispatch(getTop250List(end))
    }
}

const MyMovieTag = connect(mapStateToProps, mapDispatchToProps)(MovieTag);

export default MyMovieTag;