import React, { useEffect } from "react";
import { useBaseContext } from "../context/BaseContext";
import axios from "axios";

const api = {
  base: "https://api.openweathermap.org/data/2.5",
  key: "8f1a9e15a4c791939efd13eb99d3ab76",
  iconUrl: "https://openweathermap.org/img/wn/",
};

const lang = navigator.language;

export function Data() {
  const { data, setData, location, isCelcius } = useBaseContext();

  console.log(data);
  useEffect(() => {
    axios(
      `${api.base}/forecast?q=${location}&units=${isCelcius}&cnt=9&appid=${api.key}&lang=tr`
    ).then((res) => {
      if (res.data.cod === "200") {
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
          list: result.list
        });
      }
    });
  }, [location]);
  return <> </>;
}
