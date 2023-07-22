import { useState } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation hook
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Trello from "./pages/Trello";
import Inventory from "./pages/Inventory";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer";
import Error from "./pages/Error";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  const [email, setEmail] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(email !== ""); 
  const location = useLocation(); // Get the current location

  const emailCallback = (email: string) => {
    setEmail(email);
    setIsLoggedIn(email !== "");
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isLoggedIn={isLoggedIn} emailCallback={emailCallback}/>
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage isLoggedIn={isLoggedIn} />} />
          <Route path="/about" element={<About isLoggedIn={isLoggedIn}/>} />
          <Route path="/trello" element={<ProtectedRoute element={<Trello />} />} />
          <Route path='/inventory' element={<ProtectedRoute element={<Inventory/>} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn emailCallback={emailCallback}/>} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </main>
      <ToastContainer />
      {location.pathname === "/" ? null : <Footer/> } {/* Render the footer when not on root path */}
    </div>
  );
}

export default App;
