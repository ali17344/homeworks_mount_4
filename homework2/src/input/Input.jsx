import React from 'react';

const Input = () => {
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
            
        </div>
    );
}

export default Input;
