import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "./Components/Loading";
import { auth } from "./firebase.init";

export const GlobalContext = React.createContext<any>({});

const AllContext = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, currentLoading, currentError] = useAuthState(auth);

  if (currentLoading) {
    return <Loading></Loading>;
  }

  if(currentError) {
    console.log(currentError);
  }

  return (
    <>
      <GlobalContext.Provider value={currentUser}>
        {children}
      </GlobalContext.Provider>
    </>
  );
};

export default AllContext;
