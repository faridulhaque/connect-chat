import {
  arrayUnion,
  doc,
  onSnapshot,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../AllContext";
import { database } from "../firebase.init";
import ChatBoxTop from "./ChatBoxTop";
import ChatInput from "./ChatInput";
import ChatTray from "./ChatTray";
import { v4 as uuid } from "uuid";

const ChatBox = () => {
  const { openChatValues, currentUser } = useContext(GlobalContext);
  const { chatId, user } = openChatValues?.state;

  const [messages, setMessages] = useState<any>([]);
  const [text, setText] = useState("");

  const handleSend = async () => {
    if (chatId && currentUser?.uid && text) {
      await updateDoc(doc(database, "chats", chatId), {
        messages: arrayUnion({
          id: uuid(),
          senderId: currentUser?.uid,
          text,
          date: Timestamp.now(),
        }),
      });

      await updateDoc(doc(database, "userChats", currentUser.uid), {
        [chatId + ".lastMessage"]: {
          text,
        },
        [chatId + ".date"]: serverTimestamp(),
      });

      await updateDoc(doc(database, "userChats", user.uid), {
        [chatId + ".lastMessage"]: {
          text,
        },
        [chatId + ".date"]: serverTimestamp(),
      });
    }
    setText("");
  };

  useEffect(() => {
    if (chatId) {
      const unSub = onSnapshot(doc(database, "chats", chatId), (doc: any) => {
        doc.exists() && setMessages(doc.data().messages);
      });

      return () => {
        unSub();
      };
    }
  }, [chatId]);

  return (
    <div className="xl:w-7/12 pc:w-7/12 ipad:w-7/12 notebook:w-7/12 tablet:w-full mobile:w-full micro:w-full h-full bg-gray-500">
      <ChatBoxTop displayName={user?.displayName}></ChatBoxTop>
      <ChatTray messages={messages}></ChatTray>
      <ChatInput
        setText={setText}
        handleSend={handleSend}
        text={text}
      ></ChatInput>
    </div>
  );
};

export default ChatBox;
