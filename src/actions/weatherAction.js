import {api_key, base_url} from "../utils/Constants";

export const PUT_WEATHER = 'PUT_WEATHER';
export const WEATHER_REQUEST = 'WEATHER_REQUEST';
export const WEATHER_ERROR = 'WEATHER_ERROR';

export const putWeatherAction = weather => ({
    type: PUT_WEATHER,
    payload: weather
});

export const requestWeatherAction = () => ({
    type: WEATHER_REQUEST,
    payload: 'pending...'
});

export const errorWeatherAction = () => ({
    type: WEATHER_ERROR,
    payload: 'error'
});

export const getWeatherAction = city => {
    return (dispatch) => {
        dispatch(requestWeatherAction());
        fetch(`${base_url}?q=${city}&units=metric&appid=${api_key}`)
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error('' + response.status);
                }
            })
            .then(data => {
                return {
                    city: data.name,
                    country: data.sys.country,
                    temp: data.main.temp,
                    pressure: data.main.pressure,
                    sunset: data.sys.sunset
                };
            })
            .then(weather => dispatch(putWeatherAction(weather)))
            .catch(e => dispatch(errorWeatherAction(e)))
    }
};