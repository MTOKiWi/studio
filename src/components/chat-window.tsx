"use client";

import type { User, Chat } from "@/lib/types";
import ChatHeader from "./chat-header";
import MessageList from "./message-list";
import MessageInput from "./message-input";
import { MessagesSquare } from "lucide-react";

type ChatWindowProps = {
  user: User | null;
  chat: Chat | null;
  onSendMessage: (text: string) => void;
  onBack: () => void;
};

export default function ChatWindow({ user, chat, onSendMessage, onBack }: ChatWindowProps) {
  if (!user || !chat) {
    return (
      <div className="flex h-full flex-col items-center justify-center bg-background text-center">
        <MessagesSquare className="h-24 w-24 text-muted-foreground/50" />
        <h1 className="mt-4 text-2xl font-semibold text-muted-foreground">ChatLink Premium</h1>
        <p className="mt-2 text-muted-foreground">Select a contact to start messaging.</p>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col">
      <ChatHeader user={user} onBack={onBack} />
      <MessageList messages={chat.messages} currentUser="user-0" />
      <MessageInput onSendMessage={onSendMessage} />
    </div>
  );
}
