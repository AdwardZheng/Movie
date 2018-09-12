import { connect } from 'react-redux';
import {updateInTheaterList, updateUSTheaterList} from '../actions/movieAction';
import MovieComponent from '../Page/Movie/Movie';


const mapStateToProps = state => {
    console.log(state);
    return {
        inTheaterList: state.Intheater.inTheaterList,
        inUSTheaterList: state.Intheater.inUSTheaterList,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUpdateHandle: list => {
            dispatch(updateInTheaterList(list));
        },
        onUpdateUSHandle: list => {
            dispatch(updateUSTheaterList(list));
        }
    }
}

const Movie = connect(
    mapStateToProps,
    mapDispatchToProps,
)(MovieComponent)

export default Movie;