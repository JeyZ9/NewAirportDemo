import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom'

const RegisterComponent = (props) => {

    // const [ date, setDate ] = useState(null)


    // api
    const [ firstName, setFirstName ] = useState('')
    const [ lastName, setLastName ] = useState('')
    const [ nationality, setNationality ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ number, setNumber ] = useState('')
    const [ dateOfBirth, setDateOfBirth ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ showPassword, setShowPassword ] = useState(false)

    const handleTogglePassword = () => {
        setShowPassword(!showPassword)
    }

    const handleDateChange = (event) => {
        const inputValue = event.target.value;
        setDateOfBirth(inputValue);
    
        // Add your date formatting logic here
        const parts = inputValue.split('/');
        if (parts.length === 3) {
          const dateObject = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
          const year = dateObject.getFullYear();
          const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
          const day = dateObject.getDate().toString().padStart(2, '0');
          const formattedDate = `${year}-${month}-${day}`;
          setBirth(formattedDate);
        } 
        // else {
        //   // Handle invalid input or set birth to an empty string
        //   setBirth('');
        // }
      };

    const handlerSubmit = async () => {
        const body = {
            firstName: firstName,
            lastName: lastName,
            nationality: nationality,
            email: email,
            number: number,
            birth: dateOfBirth,
            password: password
        }
        console.log(body)

        const customer = await axios({
            method: 'post',
            url: 'http://localhost:8080/customers/create',
            data: body
        })
    }

    return(
        <div className="flex justify-center">
            <div className="flex flex-col py-2 px-5 rounded-2xl shadow-2xl w-[20vw] h-[60vh]">
                <div className="font-semibold text-3xl flex justify-center py-2 border-b mb-4">
                    <h1>Register</h1>
                </div>

                <div className=" h-[50vh] flex flex-col justify-between text-[.8rem]">

                    <div className="h-[40vh] flex flex-col justify-between mt-5">
                        <div className="flex flex-col font-semibold">
                            <label for="first">First Name</label>
                            <input className='border rounded-md px-2' id='first' type="text" onChange={(e) => setFirstName (e.target.value)} />
                        </div>

                        <div className="flex flex-col font-semibold">
                            <label for="last">Last Name</label>
                            <input className='border rounded-md px-2' id='last' type="text" onChange={(e) => setLastName (e.target.value)} />
                        </div>

                        <div className="flex flex-col font-semibold">
                            <label for="nationality">Nationality</label>
                            <input className='border rounded-md px-2' id='nationality' type="text" onChange={(e) => setNationality (e.target.value)} />
                        </div>

                        <div className="flex flex-col font-semibold">
                            <label for="birth">Date of birth</label>
                            <input className='border rounded-md px-2' id='birth' type="date" value={dateOfBirth} onChange={handleDateChange} />
                        </div>

                        <div className="flex flex-col font-semibold">
                            <label for="phone">Phone</label>
                            <input className='border rounded-md px-2' id='phone' type="text" onChange={(e) => setNumber (e.target.value)} />
                        </div>

                        <div className="flex flex-col font-semibold">
                            <label for="email">Email</label>
                            <input className='border rounded-md px-2' id='email' type="text" onChange={(e) => setEmail (e.target.value)} />
                        </div>

                        <div className="flex flex-col font-semibold relative">
                            <label for="password">Password</label>
                            <input className='border rounded-md px-2' id='password' value={password} type={showPassword ? "text" : "password"} onChange={(e) => setPassword (e.target.value)} />
                            <button className="absolute right-2 bottom-1 text-gray-500" onClick={handleTogglePassword}>{showPassword ? <FaEye /> : <FaEyeSlash />}</button>
                        </div>

                    </div>

                    <Link to={`/customers/login`}>
                        <button className='bg-black text-white text-center rounded-md w-full' disabled={firstName === '' ? true : false || lastName === '' ? true : false || email === '' ? true : false} onClick={handlerSubmit}>Sign up</button>
                    </Link>
                        
                </div>

            </div>
        </div>
    )

}

export default RegisterComponent