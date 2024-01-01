import { LuBaggageClaim } from "react-icons/lu"
import { FaPlane, FaUserAstronaut } from "react-icons/fa"
import Logo from '../assets/Logo.png'
import { Link } from 'react-router-dom';
function HeaderComponent() {

  
  return (
    // <head className=''>
      <div className="bg-white rounded-xl shadow m-4 overflow-hidden z-50 relative">
          <div className='flex justify-between items-center px-[10em] h-[10vh] border-b-2 border-gray-500 w-full mx-auto w-screen-xl p-4 md:flex md:items-center md:justify-between'>
              <div className=''>
                  {/* <h1 className='text-black text-3xl font-extrabold'>Flight Plan</h1> */}
                  <Link to='/'>
                    <img src={Logo} alt="" className='w-[10em]' />
                  </Link>
              </div>
                <div className="w-[10vw]">
                    <ul className='flex justify-between items-center text-[1.4rem] text-gray-500'>
                        <li>
                            <Link to='/flight'>
                                <i><FaPlane/></i>
                            </Link>
                        </li>

                        <li className="flex relative cursor-pointer ">
                            <Link to='/history'>
                                <LuBaggageClaim className='text-2xl' />
                            </Link>
                        </li>

                        <li>
                            <Link to='/profile'>
                                <i><FaUserAstronaut /></i>
                            </Link>
                        </li>
                    </ul>
              </div>
          </div>
      </div>
    // </head>
  )
}

export default HeaderComponent