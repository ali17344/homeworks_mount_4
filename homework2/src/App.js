import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import axios from "axios"
import "./staly.css"
const App = () => {
  const [data, setData] = useState();
  const [input, setInput] = useState();
  const KEY = '9a61f229741aa856d43699768e4fe3da';

  const getWeather = (city) => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${KEY}`)
      .then(({ data }) => {
        const allForecasts = data.list;
        const dailyForecasts = allForecasts.filter(forecast =>
          forecast.dt_txt.includes('12:00:00')
        ).slice(0, 4);
        setData(dailyForecasts);
        console.log(dailyForecasts);
      })
      .catch((error) => {
        console.error('Ошибка при получении данных о погоде:', error);
        setData();
      });
  };

  return (
    <div>
      <div className='form'>
        <input onChange={(e) => 
      setInput(e.target.value) 
      } type="text" 
      value={input}/>
      <button onClick={() => {
      getWeather(input)
      }}>Find</button>
      </div>
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>{data && (
          <div>
            <h3>City:{input}</h3>
            <p>Temperature:{data[0].main.temp}</p>
            <p>Weather:{data[0].weather[0].main}</p>
            <p>Description:{data[0].weather[0].description}</p>
            <img src={`https://openweathermap.org/img/wn/${data[0].weather[0].icon}@2x.png
            `} alt="" />
          </div>
        )}</SwiperSlide>
        <SwiperSlide>{data && (
          <div>
            <h3>City:{input}</h3>
            <p>Temperature:{data[1].main.temp}</p>
            <p>Weather:{data[1].weather[0].main}</p>
            <p>Description:{data[1].weather[0].description}</p>
            <img src={`https://openweathermap.org/img/wn/${data[1].weather[0].icon}@2x.png
            `} alt="" />
          </div>
        )}</SwiperSlide>
        <SwiperSlide>{data && (
          <div>
            <h3>City:{input}</h3>
            <p>Temperature:{data[2].main.temp}</p>
            <p>Weather:{data[2].weather[0].main}</p>
            <p>Description:{data[2].weather[0].description}</p>
            <img src={`https://openweathermap.org/img/wn/${data[2].weather[0].icon}@2x.png
            `} alt="" />
          </div>
        )}</SwiperSlide>
        <SwiperSlide>{data && (
          <div>
            <h3>City:{input}</h3>
            <p>Temperature:{data[3].main.temp}</p>
            <p>Weather:{data[3].weather[0].main}</p>
            <p>Description:{data[3].weather[0].description}</p>
            <img src={`https://openweathermap.org/img/wn/${data[3].weather[0].icon}@2x.png
            `} alt="" />
          </div>
        )}</SwiperSlide>
        
      </Swiper>
    </div>
  );
}

export default App;
