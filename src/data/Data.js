import React, { useEffect } from "react";
import { useBaseContext } from "../context/BaseContext";
import axios from "axios";

const api = {
  base: "https://api.openweathermap.org/data/2.5",
  iconUrl: "https://openweathermap.org/img/wn/"
};


export function Data() {
  const { setData, location } = useBaseContext();

  useEffect(() => {
    axios(
      `${api.base}/forecast?q=${location}&units=metric&cnt=9&appid=${process.env.REACT_APP_WEATHER_API_KEY}&lang=tr`
    ).then((res) => {
        console.log(res.data.list[0]);
        let result = res.data;
        setData({
          cityname: result.city.name,
          country: result.city.country,
          day: result.list[0].dt_txt.split(" ")[0],
          hours: result.list[0].dt_txt
            .split(" ")[1]
            .split(":")
            .splice(0, 2)
            .join(":"),
          description: result.list[0].weather[0].description,
          icon: result.list[0].weather[0].icon,
          feelsLike: result.list[0].main.feels_like,
          temp: result.list[0].main.temp,
          list: result.list.slice(1)
        });
      
    }).catch(err => {
        alert('Geçersiz bölge ismi girdiniz')
      })
  }, [location]);
  return <> </>;
}
