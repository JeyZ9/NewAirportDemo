import React, { createContext, useState, useEffect} from "react";

export const FlightContext = createContext();

const FligthProvider = ({ children }) => {

    const [flights, setFlights] = useState([]);
    
    useEffect(() => {
        const fetchFlights = async () => {
            try {
                const response = await fetch('http://localhost:8080/flights/get');
                const data = await response.json();
                setFlights(data);
            } catch(error){
                console.error("Bug a Happy", error)
            }
        };
        fetchFlights();
    }, []);
    return <FlightContext.Provider value={{ flights }}>{children}</FlightContext.Provider>
};

export default FligthProvider;