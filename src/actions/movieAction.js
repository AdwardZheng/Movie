//定义action和action生成函数
export const UPDATE_INTHEATER_LIST = "UPDATE_INTHEATER_LIST";
export const UPDATE_USTHEATER_LIST = "UPDATE_USTHEATER_LIST";
export const UPDATE_TOP250_LIST = "UPDATE_TOP250_LIST";
export const GET_TOP250_LIST = "GET_TOP250_LIST";
export const LOADING_TOP250 = "LOADING_TOP250";
export const LOADMORE_TOP250 = "LOADMORE_TOP250";

export function updateInTheaterList(list) {
    return {
        type: UPDATE_INTHEATER_LIST,
        list: list,
    }
}

export function updateUSTheaterList(list) {
    return {
        type: UPDATE_USTHEATER_LIST,
        list: list,
    }
}

export function updateTop250List(list) {
    return {
        type: UPDATE_TOP250_LIST,
        list: list,
    }
}

export function getTop250List(end) {
    return {
        type: GET_TOP250_LIST,
        end: end,
    }
}

export function logingTop250(loading) {
    return {
        type: LOADING_TOP250,
        loading: loading,
    }
}

export function loadMoreTop250(loadMore) {
    return {
        type: LOADMORE_TOP250,
        loadMore: loadMore,
    }
}