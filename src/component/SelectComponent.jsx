import React, { useContext, useEffect, useState } from 'react';
import { TbPlaneTilt } from 'react-icons/tb';
import { LuArrowRight } from 'react-icons/lu';
import { useParams } from 'react-router-dom';
import { TicketContext } from '../context/TicketContext';

const SelectComponent = () => {
  const { origin, departure } = useParams();

  const { tickets } = useContext(TicketContext);

  if (!tickets || !origin || !departure) {
    return <div>Loading...</div>;
  }

  const ticket = tickets.find((item) => {
    return item.flight.origin.city === origin && item.flight.destination.city === departure;
  });
    console.log(ticket)

  return (
    <div className="text-gray-700">
      <div className='py-10 shadow-md px-5 my-5'>
          <div className="flex text-3xl font-semibold w-[12em] justify-between">
            <div className=" flex items-center justify-center">
                <TbPlaneTilt/>
            </div>
            
            <div className="text-2xl flex items-center w-[80%] justify-between">
              <h1 className=''>{ticket.flight.origin.city}</h1>
              <h1><LuArrowRight/></h1>
              <h1>{ticket.flight.destination.city}</h1>
            </div>
          </div>
      </div>
    </div>
  );
};

export default SelectComponent;
