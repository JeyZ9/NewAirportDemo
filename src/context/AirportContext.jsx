import React, { createContext, useState, useEffect} from "react";

export const AirportContext = createContext();

const AirportProvider = ({ children }) => {

    const [airports, setAirports] = useState([]);
    
    useEffect(() => {
        const fetchAirports = async () => {
            try {
                const response = await fetch('http://localhost:8080/airports/get');
                const data = await response.json();
                setAirports(data);
            } catch(error){
                console.error("Bug a Happy", error)
            }
        };
        fetchAirports();
    }, []);

    return <AirportContext.Provider value={{ airports }}>{children}</AirportContext.Provider>
};

export default AirportProvider;