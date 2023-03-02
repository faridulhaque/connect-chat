import React from "react";
import useCurrentUser from "./useCurrentUser";
type initialStateType = {
  chatId: string | null;
  user: any;
};

const useOpenChat = () => {
  const initialState: initialStateType = {
    chatId: null,
    user: {},
  };

  const { currentUser } = useCurrentUser();

  const chatReducer = (state: any, action: any) => {
    switch (action.type) {
      case "CHANGE_USER":
        return {
          chatId:
            currentUser.uid > action.payload.uid
              ? currentUser.uid + action.payload.uid
              : action.payload.uid + currentUser.uid,
          user: action.payload,
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = React.useReducer(chatReducer, initialState)

  return {
    state,
    dispatch
  };
};

export default useOpenChat;
