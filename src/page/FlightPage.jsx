import React, { useContext,useState, useRef } from 'react'
import { TicketContext } from '../context/TicketContext'
import { Link } from 'react-router-dom'
import { CgArrowsExchange } from "react-icons/cg";
import FooterComponent from '../component/FooterComponent';

function FlightPage() {

  const [date, setDate] = useState('');
  const dateInputRef = useRef(null);

  const handleChange = (e) => {
    setDate(e.target.value);
  };


  const { tickets } = useContext(TicketContext)
  // const ticket = tickets.find(item => item.ticketId)
  if(!tickets){
    return(<div className='h-screen w-screen flex justify-center items-center'>
        <h1>Loading...</h1>
      </div>)
  }
  console.log(tickets)

  return (
    <div className='px-[10em] h-screen flex flex-col justify-between py-5'>
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
                <input id='origin' name='origin' className='group-focus outline-none' type="text" placeholder='Origin' />
              </div>

              <div className="rounded-full bg-black text-white flex justify-center items-center w-7 h-5 absolute inset-x-[47%]">
                <button><CgArrowsExchange /></button>
              </div>

              <div className="border border-[#808080] flex flex-col w-[14.5vw] p-2 rounded-xl">
                <label className='font-semibold' for='destination'>To</label>
                <input id='destination' name='destination' className='outline-none' type="text" placeholder='Destination' />
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
        <div>
          <FooterComponent />
        </div>
    </div>
  )
}

export default FlightPage