import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import { CgPassword } from 'react-icons/cg';

const LoginComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLoginClick = () => {
    // Placeholder function for handling login click
    if (selectedItem) {
      console.log('Login clicked for:', selectedItem);
    } else {
      console.log('No data found for the specified condition.');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/customers/get'); // Replace with your API endpoint
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [email, password]);

  useEffect(() => {
    const foundItem = data.find((item) => item.email === email);
    setSelectedItem(foundItem);
  }, [data, password]);

  return (
    <div className="flex flex-col justify-center items-center p-5">
      <div className="w-[30vw] h-[80vh] rounded-2xl shadow-2xl border border-gray-400 p-5">
        <div className="flex justify-center pb-4 border-b">
          <h1 className="font-bold text-3xl">Filght Plan</h1>
        </div>

        <div className="flex justify-center p-5">
          <p className="font-semibold">Login</p>
        </div>

        <div className="px-10 flex flex-col justify-between h-[56vh]">
          <div className="">
            <div className="flex flex-col">
              <label className="font-semibold" htmlFor="user">
                Email
              </label>
              <input
                className="border rounded-md px-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="user"
              />
            </div>

            <div className="flex flex-col relative">
              <label className="font-semibold" htmlFor="password">
                Password
              </label>
              <input
                className="border rounded-md px-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? 'text' : 'password'}
                id="password"
              />
              <button
                className="absolute right-2 bottom-1 text-gray-500"
                onClick={handleTogglePassword}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>

            <div className="flex justify-end text-[.7rem]">
              <div className=" w-[8vw] flex justify-between">
                <a href="">Forgot password?</a>
                <a href="">Help?</a>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between text-center">
            {selectedItem ? (
              <div className="">
                <div className="" key={selectedItem.customerId}>
                  <Link
                    to={selectedItem.password === password && selectedItem.email === email ? '/' : ''}
                    onClick={handleLoginClick}
                    className="flex justify-center items-center bg-black rounded-md"
                  >
                    <button disabled={password === '' || email === '' ? true : false} className="text-white font-semibold py-1 w-full h-full">Login</button>
                  </Link>
                </div>
              </div>
            ) : (
                <Link to={``} onClick={handleLoginClick} className="flex justify-center items-center bg-black rounded-md">
                  <button disabled={true} className="text-white font-semibold w-full h-full py-1">Login</button>
              </Link>
            )}

            <Link to={`/customers/register`} className="flex justify-center items-center py-1">
              <p className='text-gray-500'>Don't have an account?</p>
              <button className="text-blue-500 font-semibold">Register</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
