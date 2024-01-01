import { useEffect, useState } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'
import HeaderComponent from './component/HeaderComponent'
import HomePage from './page/HomePage'
import TicketPage from './page/TicketPage'
import BookingPage from './page/BookingPage'
import FlightPage from './page/FlightPage'
import TestPage from './test/ScrollGroup'
import ProfliePage from './page/ProfliePage'
import HistoryPage from './page/HistoryPage'
import CheckoutPage from './page/CheckoutPage'
import RegisterPage from './page/RegisterPage'
import LoginPage from './page/LoginPage'

function App() {
  return (
    <div className=''>
      <Router>
        <HeaderComponent />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/ticket/:origin/:departure' element={<TicketPage />} />
          <Route path='/ticket/booking/:id/:origin/:departure' element={<BookingPage />} />
          <Route path='/flight' element={<FlightPage />} />
          <Route path='/profile' element={<ProfliePage />} />
          <Route path='/history' element={<HistoryPage />} />
          <Route path='/ticket/booking/:id/:origin/:departure/checkout' element={<CheckoutPage />} />
          <Route path='/customers/login' element={<LoginPage />} />
          <Route path='/customers/register' element={<RegisterPage />} />
          <Route path='/test' element={<TestPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
