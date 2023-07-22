import useAuth from "../utils/Auth";
import { useState, useEffect } from "react";
const Trello = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    // fetch the JWT token from storage (e.g., local storage or cookie)
    setIsAuthenticated(useAuth());
  }, []);


  return (
    <>
      <h1>Hello</h1>
    </>
  )
}

export default Trello