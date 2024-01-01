import React, { createContext, useState, useEffect} from "react";

export const TicketContext = createContext();

const TicketProvider = ({ children }) => {

    const [tickets, setTicket] = useState([]);
    
    useEffect(() => {
        const fetchTickets = async () => {
            try {
                const response = await fetch('http://localhost:8080/tickets/get');
                const data = await response.json();
                setTicket(data);
            } catch(error){
                console.error("Bug a Happy", error)
            }
        };
        fetchTickets();
    }, []);

    return <TicketContext.Provider value={{ tickets }}>{children}</TicketContext.Provider>
};

export default TicketProvider;