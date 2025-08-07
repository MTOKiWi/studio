"use client";

import React, { useState } from 'react';
import type { User, Chat } from '@/lib/types';
import { users, chats } from '@/lib/data';
import ContactList from '@/components/contact-list';
import ChatWindow from '@/components/chat-window';
import { cn } from '@/lib/utils';

export default function AppPage() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [activeChat, setActiveChat] = useState<Chat | null>(null);

  const handleSelectUser = (user: User) => {
    setSelectedUser(user);
    const chat = chats.find(c => c.userId === user.id) || { id: `chat-${user.id}`, userId: user.id, messages: [] };
    setActiveChat(chat);
  };

  const handleSendMessage = (text: string) => {
    if (!activeChat || !selectedUser) return;

    const newMessage = {
      id: `msg-${Date.now()}`,
      text,
      timestamp: new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }).format(new Date()),
      senderId: 'user-0',
      type: 'text' as const,
    };
    
    setActiveChat(prev => prev ? {...prev, messages: [...prev.messages, newMessage]} : null);
  }

  return (
    <main className="flex h-screen w-full bg-background font-body text-foreground">
      <div className="flex h-full w-full overflow-hidden antialiased">
        <div className={cn(
          "w-full md:w-1/3 md:flex flex-col border-r border-border bg-card/50",
          selectedUser ? "hidden md:flex" : "flex"
        )}>
          <ContactList 
            users={users} 
            onSelectUser={handleSelectUser} 
            selectedUser={selectedUser} 
          />
        </div>
        <div className={cn(
          "w-full md:w-2/3 flex-col bg-background",
          selectedUser ? "flex" : "hidden md:flex"
        )}>
           <ChatWindow 
            user={selectedUser} 
            chat={activeChat}
            onSendMessage={handleSendMessage}
            onBack={() => setSelectedUser(null)}
          />
        </div>
      </div>
    </main>
  );
}
