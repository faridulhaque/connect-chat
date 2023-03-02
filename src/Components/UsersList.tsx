import React, { useContext, useState } from "react";
import Search from "./Search";
import User from "./User";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { database } from "../firebase.init";
import { GlobalContext } from "../AllContext";
import RawUser from "./RawUser";

const UserList = () => {
  const { currentUser, openChatValues } = useContext(GlobalContext);

  const { state, dispatch } = openChatValues;

  const [searchKey, setSearchKey] = useState("faridmurshed9@gmail.com");

  const [chats, setChats] = React.useState<any>([]);

  const [searchedUser, setSearchedUser] = useState<any>({});

  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (searchKey.includes(" ")) {
      return setError("Email must not contain spaces!");
    }
    const q = query(
      collection(database, "users"),
      where("email", "==", searchKey)
    );
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc: any) => {
        setSearchedUser(doc.data());
        setError("");
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleClearSearch = () => {
    setSearchKey("");
    setSearchedUser({});
  };

  const handleOpenChat = async () => {
    const combinedId: string =
      currentUser?.uid > searchedUser?.uid
        ? currentUser.uid + searchedUser?.uid
        : searchedUser?.uid + currentUser?.uid;
    try {
      const res = await getDoc(doc(database, "chats", combinedId));

      if (!res.exists()) {
        await setDoc(doc(database, "chats", combinedId), { messages: [] });

        // create user chats
        await updateDoc(doc(database, "userChats", currentUser?.uid), {
          [combinedId + ".userInfo"]: {
            uid: searchedUser?.uid,
            displayName: searchedUser?.displayName,
            photoUrl: "https://i.ibb.co/6YK1cXs/avatar.jpg",
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
        await updateDoc(doc(database, "userChats", searchedUser?.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser?.uid,
            displayName: currentUser.displayName,
            photoUrl: "https://i.ibb.co/6YK1cXs/avatar.jpg",
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (error) {
      console.log(error);
    }
    dispatch({ type: "CHANGE_USER", payload: searchedUser });
  };

  const getChats = (uid: string) => {
    const unSub = onSnapshot(doc(database, "userChats", uid), (doc) => {
      setChats(doc.data());
    });
    return () => {
      unSub();
    };
  };

  React.useEffect(() => {
    if (currentUser?.uid) {
      getChats(currentUser.uid);
    }
  }, [currentUser]);

  const handleSelectChat = (userInfo: any) => {
    dispatch({ type: "CHANGE_USER", payload: userInfo });
  };

  return (
    <div className="w-full h-auto">
      <Search
        handleSearch={handleSearch}
        setSearchKey={setSearchKey}
        handleClearSearch={handleClearSearch}
        searchKey={searchKey}
      ></Search>
      {error && <small className="text-red-400 ml-2">{error}</small>}

      {searchedUser?.uid ? (
        // If searchedUser exists, render a User component with the details of that user
        <User
          searchedUser={searchedUser}
          setSearchedUser={setSearchedUser}
          handleOpenChat={handleOpenChat}
        ></User>
      ) : (
        // If searchedUser doesn't exist, check if chats exist
        // If chats exist, sort them by date and map over them to render a list of RawUser components
        Object.entries(chats)
          .sort((a: any, b: any) => b[1].date - a[1].date)
          .map((chat: any) => (
            <RawUser
              rawUser={chat[1]}
              key={chat[0]}
              handleSelectChat={handleSelectChat}
              selectedUid={state?.user?.uid}
            ></RawUser>
          ))
      )}
    </div>
  );
};

export default UserList;
