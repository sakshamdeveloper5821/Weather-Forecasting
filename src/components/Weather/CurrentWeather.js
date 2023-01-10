import React, { Component } from 'react'
import WeatherCard from './CurrentWeatherCard';
import Loader from "react-loader";
export default (props) => {
    const {data}= props
    return (
      <div className="container">
        {
            data.loader ?
                <Loader loading={!data.loading}/>
                : data.success ?
                (<WeatherCard  data={data}/>)
                : "No Data!"
        }
      </div>
    )
}
