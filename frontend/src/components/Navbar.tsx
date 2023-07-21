import React, { useState } from "react";

const Navbar = ({ isLoggedIn }) => {
  const [open, setOpen] = useState(true);

  // Name: toggleMenu
  // Purpose: Toggles the menu open and closed when screen is small
  // Parameters: None
  // Returns: None
  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div
      className="w-full mx-auto bg-white border-b 2xl:max-w-7xl"
      style={{ maxWidth: "100%", marginLeft: "auto", marginRight: "auto" }}
    >
      <div className="relative flex flex-col w-full p-5 mx-auto bg-white md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between lg:justify-start">
          <a
            className="text-lg tracking-tight text-black uppercase focus:outline-none focus:ring lg:text-2xl"
            href="/"
          >
            <span className="lg:text-lg uppercase focus:ring-0">
              construction.io
            </span>
          </a>
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-black focus:outline-none focus:text-black md:hidden"
          >
            <svg
              className="w-6 h-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                className={open ? "hidden" : "inline-flex"}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
              <path
                className={open ? "inline-flex" : "hidden"}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <nav
          className={
            open
              ? "flex-col items-center flex-grow md:pb-0 md:flex md:justify-end md:flex-row"
              : "hidden"
          }
        >
          <a
            className="px-2 py-2 text-sm text-gray-500 lg:px-6 md:px-3 hover:text-blue-600 lg:ml-auto"
            href="/"
          >
            About
          </a>
          <a
            className="px-2 py-2 text-sm text-gray-500 lg:px-6 md:px-3 hover:text-blue-600"
            href="/search"
          >
            Search
          </a>
          <a
            className="px-2 py-2 text-sm text-gray-500 lg:px-6 md:px-3 hover:text-blue-600"
            href="/saved"
          >
            Saved
          </a>
          <div className="inline-flex items-center gap-2 list-none lg:ml-auto">


            {isLoggedIn ? null : <button
              onClick={() => {
                window.location.href = "signin";
              }}
              className="block px-4 py-2 mt-2 text-sm text-gray-500 md:mt-0 hover:text-blue-600 focus:outline-none focus:shadow-outline"
            >
              Sign in
            </button>}

            {/* Used to check login state */}
            {isLoggedIn ? (
              <button
                onClick={() => {
                  
                }}
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-black rounded-full group focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-gray-700 active:bg-gray-800 active:text-white focus-visible:outline-black"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => {
                  window.location.href = "signup";
                }}
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-black rounded-full group focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-gray-700 active:bg-gray-800 active:text-white focus-visible:outline-black"
              >
                Sign up
              </button>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
