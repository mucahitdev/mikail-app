import React from "react";

function OtherDay({ data }) {


  const hours = data.dt_txt
    .split(" ")[1]
    .split(":")
    .splice(0, 2)
    .join(":")
    ;
  const day = data.dt_txt.split(" ")[0].split("-").splice(1, 3).join("-");

  const temp = Math.floor(data.main.temp)

  const otherIcon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`


  return (
    <div className="mb-1 sm:w-1/4 p-1">
      <div className="bg-slate-700 rounded text-light flex flex-col">
        <span className="mx-auto text-white">  {hours} </span>


        <span className="mx-auto text-white">{day}</span>

        <div className="flex mx-auto text-white items-center">
          <span> {temp} </span>
          <img src={otherIcon} className="w-7 h-7 ml-2 my-2 bg-slate-400 rounded-full" alt="" />
        </div>
      </div>
    </div>
  )
}

export default OtherDay;
