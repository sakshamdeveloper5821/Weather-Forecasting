import * as types from '../types';

const initialState={
    success:false,
    loading: false,
    error: false,
    payload: null
}
export default (state=initialState, {type, payload}) => {
    switch(type) {
        case types.WEATHER_DAILY_SUCCESS:
            return {
                ...initialState,
                success: true,
                payload
            }
        case types.WEATHER_DAILY_LOADING:
            return {
                ...initialState,
                loading: true,
                payload
            }
        case types.WEATHER_DAILY_ERROR:
            return {
                ...initialState,
                error: true,
                payload
            }
        default:
        return state
    }
}