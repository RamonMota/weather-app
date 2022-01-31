import React, { createContext, useState, useContext } from "react";

const CityContext = createContext();

export default function CityProvider({ children }) {
    const [city, setCities] = useState('Vancouver');

    return (
        <CityContext.Provider value={{city, setCities}}>{children}</CityContext.Provider>
    );
}

export  function useCity() {
    const context = useContext(CityContext);
    const { city, setCities } = context;
    return { city, setCities };
}