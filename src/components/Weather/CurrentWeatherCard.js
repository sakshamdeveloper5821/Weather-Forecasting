import React, { Component } from 'react'
import _ from 'lodash'
export default (props) => {
    const { main, name, weather } = props.data.payload
    return (
        <div className="current-weather-display">
            {
                (!!props.data.payload) && _.isEmpty(!props.data.payload) ?
                    (
                        <>
                            <div className="weather-location">{name}</div>
                            <div className="weather-min-max-temp">{`${main.temp_min}° | ${main.temp_max}°`}</div>
                            <div className="weather-current">
                                <span className="weather-temp">{main.temp} °&nbsp;<sup>c</sup></span>
                            </div>
                            <div className="weather-condition">
                                <img className="weather-icon" src={`http://openweathermap.org/img/w/${weather[0].icon}.png`} />
                                <span className="weather-description">{weather[0].main}</span>
                            </div>
                        </>
                    )
                    : ""
            }
        </div>
    )
    }
