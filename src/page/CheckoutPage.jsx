import React from 'react'
import FooterComponent from '../component/FooterComponent'
import { useParams } from 'react-router-dom'
import LoginComponent from '../component/LoginComponent'

function CheckoutPage() {
    const { id } = useParams()
  return (
    <div className='h-screen p-5 flex flex-col justify-between'>
        
    </div>
  )
}

export default CheckoutPage