import { createContext,useContext, useState } from "react";

const BaseContext = createContext();

export const  BaseProvider = ({children}) => {
    const [data, setData] = useState({list:[]});
    const [location, setLocation] = useState("Gerze");
    const [isCelcius, setIsCelcius] = useState("metric")
    
    const values = {
      data,
      setData,
      location,
      setLocation,
      isCelcius
    }
  return (
    <BaseContext.Provider value={values} > {children} </BaseContext.Provider>
  )
}

export const useBaseContext = () => useContext(BaseContext)