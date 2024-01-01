import { useEffect, useState } from "react"
import TicketComponent from "../component/TicketComponent"

const TicketPage = () => {
    const [isActive, setIsActive] = useState(false)

  useEffect(() =>{
    window.addEventListener('scroll', () => {
      window.scrollY > 80 ? setIsActive(true) : setIsActive(false)
    })
  })
    return(
        <div className="h-screen">
            <div className={`${isActive ? 'h-screen top-0 fixed transition delay-300 duration-300' : ''}`}>
                <TicketComponent />
            </div>
        </div>
    )
}

export default TicketPage