import React from 'react'
import Title from '../assets/Title.png'

function AdviceComponent() {
  return (
    <div className='px-[10em] flex flex-col justify-center'>
        <div className=" flex justify-center px-[10em] my-[1em] items-center bg-Airport bg-cover bg-no-repeat bg-center">
            {/* <h1 className='text-5xl font-bold py-[1em] border-b-2 border-gray-500 w-[20vw] text-slate-200'>Flight</h1> */}
            <img src={Title} alt="" className='animate-pulse w-[15em] py-[2em] ' />
        </div> {/* <div className="h-[40em] px-[5em] py-[2em]">     <ListsFlight /> </div> */}
    </div>
  )
}

export default AdviceComponent