import {UPDATE_INTHEATER_LIST, UPDATE_USTHEATER_LIST, UPDATE_TOP250_LIST, UPDATE_TOP250_END} from '../actions/movieAction'
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
} 

const Top250 = (state=initialTop250State, action) => {
    switch (action.type) {
        case UPDATE_TOP250_LIST:
            return {
                ...state,
                top250List: [...state.top250List, ...action.list]
            }
        case UPDATE_TOP250_END:
            return {
                ...state,
                top250End: action.endCount
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