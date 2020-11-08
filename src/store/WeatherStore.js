import weatherReducer from "../reducers/weatherReducer";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";

const initialState = {weather: {}, message: 'Enter city name'};

const store = createStore(weatherReducer, initialState, applyMiddleware(thunk));

export default store;