import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState("");

  // Callback functions for the user information
  const callBackLogin = (isLoggedIn) => {
    setLoggedIn(isLoggedIn);
  };

  const callBackUserInfo = (userInfo) => {
    setUserInfo(userInfo);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isLoggedIn={loggedIn} />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn callBackLogin={callBackLogin} callBackUserInfo={callBackUserInfo}/>} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </main>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
