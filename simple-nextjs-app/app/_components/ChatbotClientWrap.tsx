"use client";

import { ChatBotProvider } from "react-chatbotify";
import { ChatBotClient } from "./ChatBotClient";

export const ChatbotClientWrap = () => {
  return (
    <ChatBotProvider>
      <ChatBotClient />
    </ChatBotProvider>
  );
};
