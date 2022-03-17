import { createContext,useContext, useState } from "react";

const BaseContext = createContext();

export const  BaseProvider = ({children}) => {
    const [data, setData] = useState({list:[]});
    const [location, setLocation] = useState('Gerze');
    
    const values = {
      data,
      setData,
      location,
      setLocation
    }
  return (
    <BaseContext.Provider value={values} > {children} </BaseContext.Provider>
  )
}

export const useBaseContext = () => useContext(BaseContext)