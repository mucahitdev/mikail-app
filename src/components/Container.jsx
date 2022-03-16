import React from "react";
import { useBaseContext } from "../context/BaseContext";

import OtherDay from "./OtherDay";

function Container() {
  const { data, setLocation } = useBaseContext();
  const datas = data.list
  // if(datas == undefined){
  //   return datas = []
  // }else {
  //   var other = 
  //   return other
  // }



  return (
    <div className="app">

      <div className="container">
        <div className="row h-100">
          <div className="side col-4 text-center  ">
            <div className="search">
              <input
                className="search-input"
                type="text"
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Search City"
              />
            </div>
            <div className="data-live">
              <h4>
                {data.cityname},{data.country}
              </h4>
              <h5> {data.hours} </h5>
              <h5> {data.day} </h5>
              <p> {data.description} </p>
              <figure>
                <img src={`http://openweathermap.org/img/wn/${data.icon}@2x.png`} alt="" />
                <div> <b> {data.temp} </b> ℃ </div>

              </figure>
              <p> Hissedilen sıcaklık : <b> {data.feelsLike} </b> </p>
            </div>
          </div>
          <div className="main col-8 flex-row d-flex">
            <div className="row mt-2" >
              {
                data.list &&
                data.list.map((item, key) => <OtherDay key={key} data={item} />)
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;
