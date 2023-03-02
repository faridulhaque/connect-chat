import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../Components/Loading";
import { auth } from "../firebase.init";

const useCurrentUser = ():any => {
  const [currentUser, currentLoading, currentError] = useAuthState(auth);
  // console.log(currentUser)

  if (currentLoading) {
    return <Loading></Loading>;
  }

  if (currentError) {
    console.log(currentError);
  }
  return {
    currentUser
  }
};

export default useCurrentUser;
