import React, { createContext, useContext } from 'react'
import { TicketContext } from './TicketContext'

export const TicketLinkContext = createContext()
    const TicketLinkProvider = ({ children }) => {


    const { tickets } = useContext(TicketContext);
    const ticket = tickets.find((item) => item.ticketId)
    if(!ticket){return(<h1>Loading...</h1>);}


  const MinPriceTicketDMKtoCNX = () => {
    const filteredTickets = tickets.filter((ticket) => (
      ticket.flight.origin.airportCode === 'DMK' &&
      ticket.flight.destination.airportCode === 'CNX'
    ));
  
    if (filteredTickets.length > 0) {
      const ticketPrices = filteredTickets.map((ticket) => ticket.price);
      const minPrice = Math.min(...ticketPrices);
      return minPrice;
    }
  
    return null;
  };
  
  console.log(MinPriceTicketDMKtoCNX());
  
  const MinPriceTicket = () => {
    const filteredTickets = tickets.filter((ticket) => (
      ticket.flight.origin.airportCode === 'DMK' &&
      ticket.flight.destination.airportCode === 'HKT'
    ));
  
    if (filteredTickets.length > 0) {
      const ticketPrices = filteredTickets.map((ticket) => ticket.price);
      const minPrice = Math.min(...ticketPrices);
      return minPrice;
    }
  
    return null;
  };
  
  console.log(MinPriceTicket());

      return (
    <TicketLinkContext.Provider value={{ MinPriceTicketDMKtoCNX, MinPriceTicket }}>
      {children}
    </TicketLinkContext.Provider>
  );
}
export default TicketLinkProvider