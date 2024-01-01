import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { CgArrowsExchange } from "react-icons/cg";


const ScrollGroup = (props) => {
  const [selectItem, setSelectItem] = useState(null);
  const [ticketId, setTicketId] = useState();
  const [data, setData] = useState([]);
  const [date, setDate] = useState('');
  const [ origin, setOrigin ] = useState('');
  const [ destination, setDestination ] = useState('');
  
  const dateInputRef = useRef(null);


  

  const handleChange = (e) => {
    setDate(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8080/tickets/get');
        setData(response.data);
      } catch (e) {
        console.error("Error fetching data: ", e);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const foundItem = data.filter((item) => (item.flight.origin.city === origin && item.flight.destination.city !== origin));
    setSelectItem(foundItem);
  }, [data, ticketId]);

  // const testApi = () => {
  //   if(data.length){
  //     const uniqueCities = data.map((cityone) => cityone.flight.origin.city);
  //     return uniqueCities;
  //   }
  // }

  console.log(data.length)


  console.log(data)


  return (
    <div className="">

            <div className="flex flex-col justify-between shadow-2xl rounded-xl p-4">
              <div className="py-4 border-b">
                <h1 className='font-semibold'>Start Booking Your Flight Now</h1>
                <p>Find countless flights options & deals to various destinations around the world</p>
              </div>

              <div className="p-4">
                <div className="flex justify-around items-center">

                  <div className="flex justify-between items-center w-[30vw] relative">

                    <div className="border border-[#808080] group flex flex-col w-[14.5vw] p-2 rounded-xl">
                      <label className='font-semibold' for='origin'>From</label>
                      <input id='origin' name='origin' className='group-focus outline-none' value={origin} onChange={(e) => setOrigin(e.target.value)} type="text" placeholder='Origin' />
                    </div>

                    <div className="rounded-full bg-black text-white flex justify-center items-center w-7 h-5 absolute inset-x-[47%]">
                      <button><CgArrowsExchange /></button>
                    </div>

                    <div className="border border-[#808080] flex flex-col w-[14.5vw] p-2 rounded-xl">
                      <label className='font-semibold' for='destination'>To</label>
                      <input id='destination' name='destination' className='outline-none' type="text" value={destination} onChange={(e) => setDestination(e.target.value)} placeholder='Destination' />
                    </div>
                  </div>

                  <div className="border border-[#808080] flex flex-col p-2 rounded-xl w-[14.5vw]">
                      <label className='font-semibold' htmlFor="departure">Departure</label>
                      <input type="date" id="departure" name="departure" placeholder="dd/mm/yyyy"onChange={handleChange} ref={dateInputRef} className='text-gray-400 outline-none'/>
                  </div>

                  <div className="">
                    <button className='bg-black text-white px-[7vw] py-2 rounded-xl'>Search</button>
                  </div>
                </div>
              </div>
            </div>
            {selectItem && selectItem.map(item => (
              <div className="" key={item.ticketId}>
                <h1>{item.flight.origin.city}</h1>
              </div>
            ))}
    </div>
  );
}

export default ScrollGroup;
