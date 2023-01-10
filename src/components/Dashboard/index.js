import React, { Component } from 'react'
import { getCurrentWeather, getDailyForecast, getHourlyForecast } from '../../appRedux/actions/weatherAction';
import { connect } from 'react-redux';
import CurrentWeather from '../Weather/CurrentWeather';
import DailyWeather from '../Weather/DailyWeather';
import HourlyWeather from '../Weather/HourlyWeather';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.showPosition = this.showPosition.bind(this)
    }
    componentWillMount(){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition);
          }
    }
    showPosition(pos){
        const { latitude, longitude } = pos.coords;

        this.props.getCurrentWeather(latitude, longitude)
        this.props.getDailyForecast(latitude, longitude)
        this.props.getHourlyForecast(latitude, longitude)
    }
  render() {
      const { current, daily, hourly } = this.props
    return (
      <div className="mt-lg-5">
        <div className="col-lg-6 p-0 mx-auto">
            <div className="current-weather-display">
                <CurrentWeather data={current}/>
            </div>
            <div className="daily weather-display">
                <DailyWeather data={daily}/>
            </div>
            <div className="hourly weather-display">
                <HourlyWeather data={hourly}/>
            </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    current: state.current,
    daily: state.daily,
    hourly: state.hourly
});

export default connect(mapStateToProps, { getCurrentWeather, getDailyForecast, getHourlyForecast })(Dashboard)
