import React from "react";
import useCurrentUser from "./Hooks/useCurrentUser";
import useOpenChat from "./Hooks/useOpenChat";


export const GlobalContext = React.createContext<any>({});

const AllContext = ({ children }: { children: React.ReactNode }) => {
 
const {currentUser} = useCurrentUser()  

const openChatValues = useOpenChat()

  const value = {
    currentUser,
    openChatValues

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
