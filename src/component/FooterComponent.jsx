import React from 'react'

function FooterComponent() {
  return (
    <div>
        
        <footer className="bg-white rounded-lg shadow mt-4 flex justify-center items-center">
            <div className="w-full mx-auto px-[3em] max-w-screen-xl py-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center">© 2023 <a href="#" className="hover:underline">Flight Plan</a>. JeyZ9.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Licensing</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
        </footer>

    </div>
  )
}

export default FooterComponent