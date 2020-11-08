import {PUT_WEATHER, WEATHER_ERROR, WEATHER_REQUEST} from "../actions/weatherAction";

function weatherReducer(state, action) {
    switch (action.type) {
        // case WEATHER_REQUEST:
        case WEATHER_REQUEST:
        case WEATHER_ERROR:
            return {...state, message: action.payload, weather: ''};
        case PUT_WEATHER:
            return {...state, weather: action.payload, message: ''};
        default:
            return state;
    }
}

export default weatherReducer;