"use client";

import { Flow, useTextArea } from "react-chatbotify";

import { HtmlRendererBlock } from "@rcb-plugins/html-renderer";
import MarkdownRenderer, {
  MarkdownRendererBlock,
} from "@rcb-plugins/markdown-renderer";
import HtmlRenderer from "@rcb-plugins/html-renderer";
import ChatBot from "react-chatbotify";

export const ChatBotClient = () => {
  const { textAreaDisabled: isTextAreaDisabled, toggleTextAreaDisabled } =
    useTextArea();

  // loads html renderer plugin to be passed into chatbot
  const plugins = [HtmlRenderer()];

  const flow: Flow = {
    start: {
      message: `<div class="text-center p-8 bg-white bg-opacity-10 rounded-lg shadow-lg backdrop-blur-md">
          <h1 class="text-4xl font-bold">Hello, Welcome!</h1>
          <p class="text-lg mt-2">We’re glad to have you here.</p>

          <div class="mt-4 text-lg">
              <span>Current Time:</span>
              <span id="time" class="font-semibold"></span>
          </div>
      </div>`,
      path: "reply",
      renderHtml: ["BOT", "USER"],
    } as HtmlRendererBlock,
    reply: {
      component: <div>Hello</div>,
      options: ["Try again"],
      message: "Interesting, let's try again?",
      chatDisabled: true,
      path: "start",
      renderHtml: ["BOT", "USER"],
    } as HtmlRendererBlock,
  };

  const settings = {
    general: {
      embedded: false,
    },
    chatHistory: {
      storageKey: "example_html_render",
    },
  };

  return <ChatBot plugins={plugins} settings={settings} flow={flow} />;
};
