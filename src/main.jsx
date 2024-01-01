import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import FligthProvider from './context/FlightContext.jsx'
import AirportProvider from './context/AirportContext.jsx'
import TicketProvider from './context/TicketContext.jsx'
import TicketLinkProvider from './context/TicketLinkContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TicketProvider>
      <TicketLinkProvider>
        <AirportProvider>
          <FligthProvider>
              <App />
          </FligthProvider>
        </AirportProvider>
      </TicketLinkProvider>
    </TicketProvider>
  </React.StrictMode>,
)
