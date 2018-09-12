import { connect } from 'react-redux';
import {updateTop250List, updateTop250End} from '../actions/movieAction';
import MovieComponent from '../Page/MovieTop250/MovieTop';


const mapStateToProps = state => {
    return {
        Top250List: state.Top250.top250List,
        Top250End: state.Top250.top250End,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUpdateHandle: list => {
            dispatch(updateTop250List(list));
        },
        onUpdateEndHandle: endCount => {
            dispatch(updateTop250End(endCount));
        }
    }
}

const MovieTop250 = connect(
    mapStateToProps,
    mapDispatchToProps,
)(MovieComponent)

export default MovieTop250;