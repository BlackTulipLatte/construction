import React from "react";
import { useState } from 'react';
import axios from "axios";
import { sha256 } from 'js-sha256';
import { toast } from "react-toastify";

const SignIn = () => {

  const [userData, setUserData] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // handleSubmit: Handle form submission for sign in button
  // event: Form submission event
  // return: None
  async function handleSubmit(event) {
    
    // Prevent default form submission behavior
    event.preventDefault(); 

    // Check if email and password conform to the standard
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    if(!emailRegex.test(email)){
      toast.error("Invalid email address");
      return;
    }

    console.log(sha256("hello"));
  }

  return(
    <section>
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-20 max-w-7xl">
        <div className="w-full max-w-md mx-auto md:max-w-sm md:px-0 md:w-96 sm:px-4">
          <div className="flex flex-col">
            <div>
              <h2 className="text-4xl text-black">Sign In</h2>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <input autoComplete="false" name="hidden" style={{ display: 'none' }} />
            <input name="_redirect" type="hidden" value="https://jamstacker.studio/thankyou" />
            <div className="mt-4 space-y-6">
              <div className="col-span-full">
                <label htmlFor="email" className="block mb-3 text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  id="email"
                  className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  placeholder="email@address.com"
                  autoComplete="off"
                  onChange = {(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="password" className="block mb-3 text-sm font-medium text-gray-600">
                  Password
                </label>
                <input
                  id="password"
                  className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  placeholder="******"
                  autoComplete="off"
                  onChange = {(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="col-span-full">
                <button
                  className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                  type="submit" 
                >
                  Sign In
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
