import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  const callBackLogin = (isLoggedIn) => {
    setLoggedIn(isLoggedIn);
  };


  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn callBackLogin={callBackLogin} />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
