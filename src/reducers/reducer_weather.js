import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action) {
    switch(action.type) {
        case FETCH_WEATHER:
        //need to return a new array not change an array or it will mutate
        return [action.payload.data, ...state];
    }
    return state
}