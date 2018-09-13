import {UPDATE_INTHEATER_LIST, UPDATE_USTHEATER_LIST, UPDATE_TOP250_LIST, LOADING_TOP250, LOADMORE_TOP250} from '../actions/movieAction'
import { combineReducers } from "redux";

const initialInTheaterState = {
    inTheaterList:[],
    inUSTheaterList:[],
    
}

const Intheater = (state=initialInTheaterState,action) => {
    switch (action.type) {
        case UPDATE_INTHEATER_LIST:
            return {
                ...state,
                inTheaterList: [...state.inTheaterList, ...action.list]
            }
        case UPDATE_USTHEATER_LIST:
            return {
                ...state,
                inUSTheaterList: [...state.inUSTheaterList, ...action.list]
            }
        default:
            return state;
    }
}

const initialTop250State = {
    top250List: [],
    top250End:0, 
    loading: false,
    loadMore: false,
} 

const Top250 = (state=initialTop250State, action) => {
    switch (action.type) {
        case UPDATE_TOP250_LIST:
            return {
                ...state,
                top250List: [...state.top250List, ...action.list],
                top250End: action.end,
                loading: false,
                loadMore: false,
            }
        case LOADING_TOP250:
            return {
                ...state,
                loading: action.loading,
            }
        case LOADMORE_TOP250:
            return {
                ...state,
                loadMore: action.loadMore,
            }
        default:
            return state;
    }
}

const rootReducer = {
    Intheater: Intheater,
    Top250: Top250,
}

export default combineReducers(rootReducer);