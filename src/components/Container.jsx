import React, { useState } from "react";
import { useBaseContext } from "../context/BaseContext";
import { SearchIcon } from '@heroicons/react/solid'




import OtherDay from "./OtherDay";

function Container() {
  const { data, setLocation } = useBaseContext();
  const [city, setCity] = useState('')

  const search = () => {
    city === '' ? alert('Boş değer girmeyiniz.') : setLocation(city)
  }

  const ıconWeather = `http://openweathermap.org/img/wn/${data.icon}@2x.png`


  console.log(data);
  return (
    <div className="sm:h-screen flex items-center justify-center p-1">

      <div className="container mx-auto bg-slate-400 p-2 rounded-md">
        <span className="flex justify-center text-xl">Mikail App</span>
        <div className="m-1">
          <div className="text-gray-600 focus-within:text-gray-400 flex-nowrap flex">
            <input onChange={(e) => setCity(e.target.value)} className="p-1 m-1 text-white bg-gray-900 rounded-md pl-4 focus:outline-none focus:bg-white focus:text-gray-900 w-5/6" placeholder="Search..." autoComplete="off" />

            <div className="group m-1 w-1/6">
              <button onClick={search} className="focus:outline-none focus:shadow-outline p-1 w-full bg-slate-300 flex items-center justify-center rounded-md transition-all	ease-in-out duration-300 group-hover:bg-gray-900">
                <SearchIcon className="h-7 w-7 text-gray-900 group-hover:text-white transition-all	ease-in-out duration-300" />
              </button>
            </div>
          </div>
        </div>
        <div className="sm:flex">
          <div className="bg-slate-500 rounded-md my-2 sm:w-1/3 m-1 flex justify-center flex-col">
            <div className="mx-auto text-lg my-1"> {data.cityname}-{data.country} </div>
            <div className="mx-auto text-xs my-1"> {data.day} </div>
            <div className="mx-auto text-xs my-1"> {data.hours} </div>
            <div className="mx-auto  flex items-center">
              <img className="w-10 h-10" src={ıconWeather} alt=''/>
              <div className="text-xs"> {data.description}</div>
            </div>
          </div>
          <div className="sm:w-2/3 sm:flex sm:flex-wrap m-1" >
            {
              data.list &&
              data.list.map((item, key) => <OtherDay key={key} data={item} />)
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;