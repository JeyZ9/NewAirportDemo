import React, { useContext } from 'react';
import { TicketContext } from '../context/TicketContext';
import { Link } from 'react-router-dom';
import { TicketLinkContext } from '../context/TicketLinkContext';

const HomeComponent = () => {
  const { tickets } = useContext(TicketContext);
  const ticket = tickets.find(item => item.ticketId)
  if(!ticket){
    return(<h1>Loading...</h1>);
  }

  const { MinPriceTicket, MinPriceTicketDMKtoCNX } = useContext(TicketLinkContext)
  const minPriceTicket =  MinPriceTicket
  const minPriceTicketDMKtoCNX = MinPriceTicketDMKtoCNX
  if(!minPriceTicket || !minPriceTicketDMKtoCNX){
    return(<div>Loading...</div>)
  }

  const Hkt = () => {
    const cityHkt = tickets.filter((city) => (
      city.flight.destination.airportCode === 'HKT'
    ));
    if(cityHkt.length = 1){
      // const HKTFlight = cityHkt.map((cityone) => cityone.flight.destination.city);
      const uniqueCities = cityHkt.map((cityone) => cityone.flight.destination.city);
      return uniqueCities;
    }
    return null;
  }
  console.log(Hkt())

  const dataArr = [
    {
      id: 1,
      origin: ticket.flight.origin.city,
      destination: ticket.flight.destination.city,
      title: 'Start From',
      priceTicket: minPriceTicketDMKtoCNX(),
    },
    {
      id: 2,
      origin: ticket.flight.origin.city,
      destination: Hkt(),
      title: 'Start From',
      priceTicket: minPriceTicket(),
    },
  ];
  

  // console.log("Tickets:", tickets);
  
  

  return (
    <div className="px-[10em]">
      <div className="grid grid-cols-6 gap-5">
        {dataArr.map(item => (
          <Link to={`/ticket/${item.origin}/${item.destination}`} key={item.id}>
            <div className="w-50 h-52 group overflow-hidden flex flex-col justify-between p-5 shadow-md bg-gray-700 text-white">
              <div className="group-hover:translate-x-0 -translate-x-52 transition duration-[500ms] delay-[500ms] ease-in-out">
                <h1 className=" font-bold text-2xl">{item.origin}</h1>
                <h1 className=" font-bold text-2xl">{item.destination}</h1>
              </div>
              <div className="group-hover:translate-x-0 -translate-x-[20rem] delay-[600ms] transition duration-[600ms] ease-in-out border-t border-white">
                <h2 className="group-hover:translate-y-0 translate-y-16 delay-[1000ms] transition duration-[1000ms] ease-in-out">{item.title}</h2>
                <p className="group-hover:translate-y-0 translate-y-16 delay-[1000ms] transition duration-[1000ms] ease-in-out font-semibold">฿ {item.priceTicket}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeComponent;