import React, { useContext, useState } from 'react';
import { IoAirplaneOutline } from 'react-icons/io5';
import { LuBaggageClaim } from 'react-icons/lu';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import SelectComponent from './SelectComponent';
import { Link, useParams } from 'react-router-dom';
import { TicketContext } from '../context/TicketContext';

function TicketComponent() {
  const [filterStop, setFilterStop] = useState(false);
  const [airlineFilterVisible, setAirlineFilterVisible] = useState(false);
  const [departureTime, setDepartureTime] = useState(false);

  const toggleStopFilter = () => {
    setFilterStop(!filterStop);
  };

  const toggleAirlineFliter = () => {
    setAirlineFilterVisible(!airlineFilterVisible);
  };

  const toggleDepartureTimeFilter = () => {
    setDepartureTime(!departureTime);
  };

  const [checkboxes, setCheckboxes] = useState({
    direct: false,
    transit: false,
    oneStop: false,
    Bkk: false,
    TAA: false,
    TA: false,
    TLA: false,
    TVA: false,
    EF: false,
    MF: false,
    AF: false,
    NF: false,
  });

  const [minValue, setMinValue] = useState();
  const [maxValue, setMaxValue] = useState();

  const { origin, departure } = useParams();

  const { tickets } = useContext(TicketContext);

  const filterTickets = () => {
    const filteredTickets = tickets.filter((item) => {
      return item.flight.origin.city === origin && item.flight.destination.city === departure;
    });

    const filteredByCheckboxes = filteredTickets.filter((item) => {
      if (checkboxes.direct) {
        return item.flight.type === 'direct';
      }
      return true;
    });

    const filteredByPrice = filteredByCheckboxes.filter((item) => {
        if (minValue !== undefined && maxValue !== undefined) {
          const min = parseFloat(minValue);
          const max = parseFloat(maxValue);
          return item.price >= min && item.price <= max;
        } else if (minValue !== undefined) {
          const min = parseFloat(minValue);
          return item.price >= min;
        } else if (maxValue !== undefined) {
          const max = parseFloat(maxValue);
          return item.price <= max;
        }
        return true;
      });
      
      return filteredByPrice;
  };

  const resetValue = () => {
    setMinValue('');
    setMaxValue('');
    setCheckboxes({
      direct: false,
      transit: false,
      oneStop: false,
      Bkk: false,
      TAA: false,
      TA: false,
      TLA: false,
      TVA: false,
      EF: false,
      MF: false,
      AF: false,
      NF: false,
    });
  };

  const filteredTickets = filterTickets();

  return (
    <div className='px-[10em]'>
      <div className="">
        <SelectComponent />
      </div>
      <div className="grid grid-cols-3 gap-5">
        <div className="grid grid-cols-3 on-scrollbar overflow-y-auto overflow-x-hidden h-[80vh] text-gray-700">
          <div className=""></div>
          <div className="col-span-2 px-5">
            <div className="flex justify-between font-semibold">
              <h1 className=''>Filter</h1>
              <button className='hover:text-red-400' onClick={resetValue}>Reset</button>
            </div>

            <div className="border-b border-gray-500 font-semibold py-4">
              <div className="flex justify-between">
                <h1>Stop</h1>
                <button onClick={toggleStopFilter}>
                  {filterStop ? (
                    <BiChevronUp />
                  ) : (
                    <BiChevronDown />
                  )}
                </button>
              </div>
              {filterStop && (
                <div className="">
                  <ul className='flex flex-col justify-between h-[8vh]'>
                    <li className='flex'>
                      <div className="pr-2">
                        <input type="checkbox" name="" id="" checked={checkboxes.direct} onChange={() => setCheckboxes({...checkboxes, direct: !checkboxes.direct})} />
                      </div>
                      <h2>Direct(0)</h2>
                    </li>
                    <li className='flex'>
                      <div className="pr-2">
                        <input type="checkbox" name="" id="" checked={checkboxes.transit} onChange={() => setCheckboxes({...checkboxes, transit: !checkboxes.transit})} />
                      </div>
                      <h2>Transit(0)</h2>
                    </li>
                    <li className='flex'>
                      <div className="pr-2">
                        <input type="checkbox" name="" id="" checked={checkboxes.oneStop} onChange={() => setCheckboxes({...checkboxes, oneStop: !checkboxes.oneStop})} />
                      </div>
                      <h2>One stop(0)</h2>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div className="border-b border-gray-500 py-4">
              <h1 className='font-semibold'>Price</h1>
              <div className="flex justify-between items-center py-1">
                <div className="flex justify-start">
                  <input
                    className='w-[90%] px-2 text-gray-500 shadow-md border-none outline-none rounded-md'
                    value={minValue}
                    onChange={(e) => setMinValue(e.target.value)}
                    type="text"
                    placeholder='Min'
                  />
                </div>
                <p>To</p>
                <div className="flex justify-end">
                  <input
                    className='w-[90%] px-2 text-gray-500 shadow-md border-none outline-none rounded-md'
                    value={maxValue}
                    onChange={(e) => setMaxValue(e.target.value)}
                    type="text"
                    placeholder='Max'
                  />
                                </div>
                            </div>
                        </div>

                        <div className="border-b border-gray-500 py-4">
                            <div className="flex justify-between">
                                <h1 className='font-semibold'>Airline</h1>
                                <button onClick={toggleAirlineFliter}>
                                    {airlineFilterVisible ? (
                                        <BiChevronUp />
                                    ) : (
                                        <BiChevronDown />
                                    )}
                                </button>
                            </div>

                            {airlineFilterVisible && (
                                <div className="">
                                    <div className="flex">
                                        <div className="flex items-start py-[5px] pr-2">
                                            <input type="checkbox" name="" id="" checked={checkboxes.Bkk} onChange={() => setCheckboxes({...checkboxes, Bkk: !checkboxes.Bkk})} />
                                        </div>
                                        <div className="">
                                            <h2>Bangkok Airways</h2>
                                            <p className='text-[.7rem] text-gray-500'>฿ 1000</p>
                                        </div>
                                    </div>

                                    <div className="flex">
                                        <div className="flex items-start py-[5px] pr-2">
                                            <input type="checkbox" name="" id="" checked={checkboxes.TAA} onChange={() => setCheckboxes({...checkboxes, TAA: !checkboxes.TAA})} />
                                        </div>
                                        <div className="">
                                            <h2>Thai AirAsia</h2>
                                            <p className='text-[.7rem] text-gray-500'>฿ 1000</p>
                                        </div>
                                    </div>

                                    <div className="flex">
                                        <div className="flex items-start py-[5px] pr-2">
                                            <input type="checkbox" name="" id="" checked={checkboxes.TA} onChange={() => setCheckboxes({...checkboxes, TA: !checkboxes.TA})} />
                                        </div>
                                        <div className="">
                                            <h2>Thai Airways</h2>
                                            <p className='text-[.7rem] text-gray-500'>฿ 1000</p>
                                        </div>
                                    </div>

                                    <div className="flex">
                                        <div className="flex items-start py-[5px] pr-2">
                                            <input type="checkbox" name="" id="" checked={checkboxes.TLA} onChange={() => setCheckboxes({...checkboxes, TLA: !checkboxes.TLA})} />
                                        </div>
                                        <div className="">
                                            <h2>Thai Lion Air</h2>
                                            <p className='text-[.7rem] text-gray-500'>฿ 1000</p>
                                        </div>
                                    </div>

                                    <div className="flex">
                                        <div className="flex items-start py-[5px] pr-2">
                                            <input type="checkbox" name="" id="" checked={checkboxes.TVA} onChange={() => setCheckboxes({...checkboxes, TVA: !checkboxes.TVA})} />
                                        </div>
                                        <div className="">
                                            <h2>Thai Vietjet Air</h2>
                                            <p className='text-[.7rem] text-gray-500'>฿ 1000</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>

                        <div className="py-4 border-b border-gray-500">
                            <div className="flex justify-between">
                                <h1 className='font-semibold'>Departure Time</h1>
                                <button onClick={toggleDepartureTimeFilter}>
                                    {departureTime ? (
                                        <BiChevronUp />
                                    ) : (
                                        <BiChevronDown />
                                    )}
                                </button>
                            </div>
                                    
                            {departureTime && (
                                <div className="">
                                    <div className="flex">
                                        <div className="flex items-start py-[5px] pr-2">
                                            <input type="checkbox" name="" id="" checked={checkboxes.EF} onChange={() => setCheckboxes({...checkboxes, EF: !checkboxes.EF})} />
                                        </div>
                                        <div className="flex items-start flex-col">
                                            <h2 className='font-semibold'>Early Flight</h2>
                                            <div className="flex text-[.7rem] text-gray-500 items-center justify-between w-[24%]">
                                                <p>(10:00</p>
                                                <p>-</p>
                                                <p>12:00)</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex">
                                        <div className="flex items-start py-[5px] pr-2">
                                            <input type="checkbox" name="" id="" checked={checkboxes.MF} onChange={() => setCheckboxes({...checkboxes, MF: !checkboxes.MF})} />
                                        </div>
                                        <div className="flex items-start flex-col">
                                            <h2 className='font-semibold'>Morning Flight</h2>
                                            <div className="flex text-[.7rem] text-gray-500 items-center justify-between w-[24%]">
                                                <p>(10:00</p>
                                                <p>-</p>
                                                <p>12:00)</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex">
                                        <div className="flex items-start py-[5px] pr-2">
                                            <input type="checkbox" name="" id="" checked={checkboxes.AF} onChange={() => setCheckboxes({...checkboxes, AF: !checkboxes.AF})} />
                                        </div>
                                        <div className="flex items-start flex-col">
                                            <h2 className='font-semibold'>Afternoon Flight</h2>
                                            <div className="flex text-[.7rem] text-gray-500 items-center justify-between w-[24%]">
                                                <p>(10:00</p>
                                                <p>-</p>
                                                <p>12:00)</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex">
                                        <div className="flex items-start py-[5px] pr-2">
                                            <input type="checkbox" name="" id="" checked={checkboxes.NF} onChange={() => setCheckboxes({...checkboxes, NF: !checkboxes.NF})} />
                                        </div>
                                        <div className="flex items-start flex-col">
                                            <h2 className='font-semibold'>Night Flight</h2>
                                            <div className="flex text-[.7rem] text-gray-500 items-center justify-between w-[24%]">
                                                <p>(10:00</p>
                                                <p>-</p>
                                                <p>12:00)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            
                        </div>

                    </div>
                </div>

                <div className="col-span-2 on-scrollbar overflow-y-auto overflow-x-hidden h-[80vh]">
                {filteredTickets.map((ticket) => (
                        <div className="my-5" key={ticket.ticketId}>
                            <div className="rounded-2xl border border-gray-500 flex px-5 py-5">
                                <div className="w-[10rem]">
                                    <img src={`data:image/jpeg;base64,${ticket.logoImage}`} alt="logo" />
                                </div>

                                <div className="grid grid-cols-3">
                                    <div className="w-[15vw] flex flex-col justify-between px-5">
                                        <div className="text-2xl font-semibold">
                                            <h1>{ticket.flight.airlineName}</h1>
                                        </div>

                                        <div className="flex gap-5 justify-between">
                                            <div className="">
                                                <h2>{ticket.flight.departure}</h2>
                                                <p className='text-[.7rem] text-gray-500'>{ticket.flight.origin.airportCode}</p>
                                            </div>
                                            <div className="flex items-center text-2xl text-gray-400">
                                                <i><IoAirplaneOutline /></i>
                                            </div>

                                            <div className="">
                                                <h2>{ticket.flight.arrival}</h2>
                                                <p className='text-[.7rem] text-gray-500'>{ticket.flight.destination.airportCode}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-end">
                                        <div className="w-full flex items-center justify-around">
                                            <div className="">
                                                <h3>{ticket.flight.direct}</h3>
                                                <p className='text-[.7rem] text-gray-500'>Direct</p>
                                            </div>
                                            <div className="text-gray-500 text-2xl">
                                                <i><LuBaggageClaim /></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-end justify-end">
                                        <div className="flex">
                                            <div className="flex items-center">
                                                <div className="flex items-center">     
                                                    <h1 className='text-1xl font-semibold'>฿ {ticket.price}</h1>
                                                    <p className='text-[.8rem] text-gray-500'>/Pax</p>
                                                </div>
                                            </div>
                                            <Link to={`/ticket/booking/${ticket.ticketId}/${ticket.flight.origin.city}/${ticket.flight.destination.city}`}>
                                                <button className='ml-5 px-6 py-2 rounded-lg bg-black text-white'>Select</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                ))}
                </div>
            </div>
    </div>
    )
}

export default TicketComponent