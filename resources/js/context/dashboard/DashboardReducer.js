import { FETCH_DATA, SET_LOADING, ERROR_FETCH } from "../types";

export default (state, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                data: action.payload,
                loading: false
            };

        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        case ERROR_FETCH:
            return {
                ...state,
                errorFetch: true
            };

        default:
            return state;
    }
};
