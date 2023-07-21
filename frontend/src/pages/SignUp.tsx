import React from "react";
import { sha256 } from "js-sha256";
import { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    // Hash password
    const hashedPassword = sha256(password).toString();
    console.log(hashedPassword);

    // Post to see if email exists and if it doesnt then just add it to the database
    axios
      .post("http://localhost:3000/users", { email, password: hashedPassword})
      .then((response) => {
        setPassword("");
        setEmail("");
        console.log(response.data);
        // The response will contain { exists: true } if the email exists in the database,
        // or { exists: false, message: 'User added to the database.' } if the email was added.
        // Modify the state of the webpage to reflect loggedin status

      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <section>
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-20 max-w-7xl">
        <div className="w-full max-w-md mx-auto md:max-w-sm md:px-0 md:w-96 sm:px-4">
          <div className="flex flex-col">
            <div>
              <h2 className="text-4xl text-black">Sign Up</h2>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              autoComplete="false"
              name="hidden"
              style={{ display: "none" }}
            />
            <input
              name="_redirect"
              type="hidden"
              value="https://jamstacker.studio/thankyou"
            />
            <div className="mt-4 space-y-6">
              <div className="col-span-full">
                <label
                  htmlFor="email"
                  className="block mb-3 text-sm font-medium text-gray-600"
                >
                  Email
                </label>
                <input
                  className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  placeholder="email@address.com"
                  autoComplete="off"
                  type="email"
                  value={email} // Add this line to set the value from the state
                  onChange={(e) => setEmail(e.target.value)} // Add this line to update the state as the user types
                />
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="confirmPassword"
                  className="block mb-3 text-sm font-medium text-gray-600"
                >
                  Password
                </label>
                <input
                  id="confirmPassword"
                  className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  placeholder="******"
                  autoComplete="off"
                  type="password"
                  value={password} // Add this line to set the value from the state
                  onChange={(e) => setPassword(e.target.value)} // Add this line to update the state as the user types
                />
              </div>

              <div className="col-span-full">
                <button
                  className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
