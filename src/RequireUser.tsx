import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import useCurrentUser from "./Hooks/useCurrentUser";

const RequireUser = ({ children }: { children: React.ReactNode }): any => {
  const { currentUser } = useCurrentUser();
  const navigate = useNavigate();

//   useEffect(() => {
    
//   }, [currentUser, navigate]);

if (!currentUser?.uid) {
    return navigate("/login");
  }

  return children;
};

export default RequireUser;
