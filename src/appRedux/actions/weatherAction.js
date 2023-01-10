import * as services from '../services/weatherService';
import * as types from '../types';
import config from '../../config';

export function getCurrentWeather(lat, long) {
    console.log("pro", process.env, config.key)
    return dispatch => {
      dispatch({type: types.WEATHER_CURRENT_LOADING})
      return services.getCurrentWeather(lat, long)
        .then(res => {
            console.log(res, res);
            if(res.status === 200){
                return dispatch({type: types.WEATHER_CURRENT_SUCCESS, payload: res.data})
            }else{
                return dispatch({type: types.WEATHER_CURRENT_ERROR, payload: res.data})
            }
        })
        .catch(err => {
            console.error("err in current =>", err)
            return dispatch({type: types.WEATHER_CURRENT_ERROR, payload: err})
        })
    }
}

export function getDailyForecast(lat, long) {
    return dispatch => {
      dispatch({type: types.WEATHER_DAILY_LOADING})
      return services.getDailyForecast(lat, long)
        .then(res => {
            if(res.status === 200){
                return dispatch({type: types.WEATHER_DAILY_SUCCESS, payload: res.data})
            }else{
                return dispatch({type: types.WEATHER_DAILY_ERROR, payload: res.data})
            }
        })
        .catch(err => {
            console.error("err in daily =>", err)
            return dispatch({type: types.WEATHER_DAILY_ERROR, payload: err})
        })
    }
}

export function getHourlyForecast(lat, long) {
    return dispatch => {
      dispatch({type: types.WEATHER_DAILY_LOADING})
      return services.getHourlyForecast(lat, long)
        .then(res => {
            if(res.status === 200){
                return dispatch({type: types.WEATHER_HOURLY_SUCCESS, payload: res.data})
            }else{
                return dispatch({type: types.WEATHER_HOURLY_ERROR, payload: res.data})
            }
        })
        .catch(err => {
            console.error("err in Hourly =>", err)
            return dispatch({type: types.WEATHER_HOURLY_ERROR, payload: err})
        })
    }
}
