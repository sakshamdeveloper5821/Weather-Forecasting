import React, { Component } from 'react'
import DailyWeatherCard from './DailyWeatherCard';
import Slider from "react-slick";
import Loader from "react-loader";

export default (props) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    const {data} = props;
    return (
        <div className="container-fluid">
            <h2>Daily</h2>
            {
                data.loading ?
                    <Loader loaded={!data.loading}/>
                : data.success ?
                    (
                        <Slider {...settings}>
                            {
                                data.payload.list.length > 0 ?
                                    data.payload.list.map((item, i) => {
                                        return (<DailyWeatherCard data={item} key={i}/>)
                                    })
                                : ""
                            }
                        </Slider>
                    )
                    : "No Data !"
            }
        </div>
    )
}
