import React, { createContext, useState, useContext } from "react";

const CityContext = createContext();

export default function CityProvider({ children }) {
    const [city, setCity] = useState('Vancuver');

    return (
        <CityContext.Provider value={{city, setCity}}>{children}</CityContext.Provider>
    );
}

export  function useCity() {
    const context = useContext(CityContext);
    const { city, setCity } = context;
    return { city, setCity };
}