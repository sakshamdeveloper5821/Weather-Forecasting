import React, { Component } from 'react'
import '../../styles/weatherCard.css'
import moment from 'moment';
import _ from 'lodash';

export default (props) => {
    const{dt_txt, main, weather} = props.data
    return (
        <div className="weather-card">
            {
                (!!props.data && _.isEmpty(!props.data)) ?
                (   <>
                    <small>{moment(dt_txt).format('LTS')}</small>
                    <img className="weather icon mx-auto" src={`http://openweathermap.org/img/w/${weather[0].icon}.png`}></img>
                        {`${main.temp}°`}
                    <div className="font-weight-bold">
                    </div>
                    <div className="text-capitalize">
                        <small>{weather[0].description}</small>
                    </div>
                    </>
                )
                : ""
            }
        </div>
    )
}