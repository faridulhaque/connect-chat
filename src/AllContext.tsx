import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "./Components/Loading";
import { auth } from "./firebase.init";

export const GlobalContext = React.createContext<any>({});

const AllContext = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, currentLoading, currentError] = useAuthState(auth);
  // console.log(currentUser)

  if (currentLoading) {
    return <Loading></Loading>;
  }

  if(currentError) {
    console.log(currentError);
  }

  const value = {
    currentUser,
  }

  return (
    <>
      <GlobalContext.Provider value={value}>
        {children}
      </GlobalContext.Provider>
    </>
  );
};

export default AllContext;
