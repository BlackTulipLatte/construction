import React, { useState, useEffect, useRef } from "react";

const Navbar = ({ isLoggedIn, emailCallback }) => {
  const [open, setOpen] = useState(true);
  const [test, setTest] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);


  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const jwtToken = localStorage.getItem("jwtToken");
    setTest(jwtToken !== null);

    // Add event listener to detect clicks outside the dropdown
    document.addEventListener("click", handleClickOutside);

    return () => {
      // Remove the event listener when the component unmounts
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (e) => {
    // Check if the clicked element is outside the dropdown area
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setShowDropdown(false);
    }
  };

  // Handle logout
  const handleLogout = () => {
    // Remove the JWT token from local storage
    localStorage.removeItem("jwtToken");
    // Set the test state to false, indicating user is not logged in
    setTest(false);
    emailCallback("");
    // Redirect to the sign-in page or any other page as needed
    window.location.href = "/signin";
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
            href="/about"
          >
            About
          </a>
          {test ? (
            <a
              className="px-2 py-2 text-sm text-gray-500 lg:px-6 md:px-3 hover:text-blue-600"
              href="/trello"
            >
              Trello Board
            </a>
          ) : null}
          {test ? (
            <a
              className="px-2 py-2 text-sm text-gray-500 lg:px-6 md:px-3 hover:text-blue-600"
              href="/inventory"
            >
              Inventory Manager
            </a>
          ) : null}
          <div className="inline-flex items-center gap-2 list-none lg:ml-auto">
            {test ? (
              <div ref={dropdownRef} className="relative">
                <img
                  src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-photo-183042379.jpg"
                  width="36"
                  height="36"
                  alt="profile"
                  className="rounded-full cursor-pointer"
                  onClick={toggleDropdown}
                />
                {showDropdown && (
                  <div className="absolute z-10 max-w-xs px-1 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0">
                    {/* Dropdown content */}
                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                      <div className="relative grid gap-6 px-2 py-2 bg-white sm:p-4">
                        <a
                          href="/changepassword"
                          className="inline-flex items-start p-2 -m-2 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50"
                        >
                          <div className=""></div>
                          <div className="ml-2">
                            <p className="text-sm font-medium text-black">
                              Change password
                            </p>
                          </div>
                        </a>
                        {/* Add more dropdown items here */}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => {
                  window.location.href = "signin";
                }}
                className="block px-4 py-2 mt-2 text-sm text-gray-500 md:mt-0 hover:text-blue-600 focus:outline-none focus:shadow-outline"
              >
                Sign in
              </button>
            )}

            {/* Used to check login state */}
            {test ? (
              <button
                onClick={handleLogout}
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-black rounded-full group focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-gray-700 active:bg-gray-800 active:text-white focus-visible:outline-black"
              >
                Logout
              </button>
            ) : (
              // Render the Sign up button or any other component as needed
              <button
                onClick={() => {
                  window.location.href = "/signup";
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
