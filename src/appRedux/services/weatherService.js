import baseService from './baseService';
import config from '../../config';

export function getCurrentWeather(lat, long){
    return baseService.get(`/weather?lat=${lat}&lon=${long}&units=metric&appid=${config.key}`);
}

export function getDailyForecast(lat, long){
    return baseService.get(`/forecast/daily?lat=${lat}&lon=${long}&units=metric&cnt=&appid=${config.key}`);
}

export function getHourlyForecast(lat, long){
    return baseService.get(`/forecast?lat=${lat}&lon=${long}&units=metric&cnt=12&appid=${config.key}`);
}

