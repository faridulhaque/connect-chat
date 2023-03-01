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
  const {currentUser} = useContext(GlobalContext);

  const [searchKey, setSearchKey] = useState("");

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

  const handleOpenChat = async () => {
    const combinedId: string =
      currentUser?.uid > searchedUser?.uid
        ? currentUser.uid + searchedUser.uid
        : searchedUser.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(database, "chats", combinedId));

      if (!res.exists()) {
        await setDoc(doc(database, "chats", combinedId), { messages: [] });

        // create user chats
        await updateDoc(doc(database, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: searchedUser.uid,
            displayName: searchedUser.displayName,
            photoUrl: "https://i.ibb.co/6YK1cXs/avatar.jpg",
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
        await updateDoc(doc(database, "userChats", searchedUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoUrl: "https://i.ibb.co/6YK1cXs/avatar.jpg",
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (error) {
      console.log(error);
    }
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

  const handleClearSearch = () => {
    setSearchKey("");
    setSearchedUser({})

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
        <User
          searchedUser={searchedUser}
          setSearchedUser={setSearchedUser}
          handleOpenChat={handleOpenChat}
        ></User>
      ) : (
        Object.entries(chats)?.map((chat: any) => (
          <RawUser rawUser={chat[1]} key={chat[0]}></RawUser>
        ))
      )}
    </div>
  );
};

export default UserList;
