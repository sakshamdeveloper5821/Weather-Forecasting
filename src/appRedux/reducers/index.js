import { combineReducers } from 'redux';
import currentWeatherReducer  from './currentWeatherReducer';
import dailyWeatherReducer  from './dailyWeatherReducer';
import hourlyWeatherReducer  from './hourlyWeatherReducer';

export default combineReducers({
    current: currentWeatherReducer,
    daily: dailyWeatherReducer,
    hourly: hourlyWeatherReducer
})