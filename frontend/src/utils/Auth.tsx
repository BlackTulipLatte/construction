// custom hook to check if the user is authenticated
import { useEffect, useState } from "react";

const useAuth = () => {
console.log("useAuth");
  return localStorage.getItem("jwtToken") !== null;
};

export default useAuth;
