export const UPDATE_INTHEATER_LIST = "UPDATE_INTHEATER_LIST";
export const UPDATE_USTHEATER_LIST = "UPDATE_USTHEATER_LIST";
export const UPDATE_TOP250_LIST = "UPDATE_TOP250_LIST";
export const UPDATE_TOP250_END = "UPDATE_TOP250_END";

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

export function updateTop250End(end) {
    return {
        type: UPDATE_TOP250_END,
        endCount: end,
    }
}