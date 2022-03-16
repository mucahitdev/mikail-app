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


  return (
    <div className="">
      <div className="bg-primary py-2 rounded text-light">
        <span> <b>Saat : </b> {hours} </span>


        <span> <b>Gün : </b>{day}</span>

        <span>  <b>Sıcaklık :</b> {temp}℃ </span>
      </div>
    </div>
  )
}

export default OtherDay;
