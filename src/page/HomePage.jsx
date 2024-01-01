import React from 'react'
import AdviceComponent from '../component/AdviceComponent'
import FooterComponent from '../component/FooterComponent'
import HomeComponent from '../component/HomeComponent'

function HomePage() {
  return (
    <div className='flex flex-col justify-between w-screen'>
      <div className="">
        <AdviceComponent />
        <div className="">
          <HomeComponent />
        </div>
      </div>


        <FooterComponent />
    </div>
  )
}

export default HomePage