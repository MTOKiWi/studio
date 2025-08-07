"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Paperclip, Mic, SendHorizonal } from "lucide-react";

type MessageInputProps = {
  onSendMessage: (text: string) => void;
};

export default function MessageInput({ onSendMessage }: MessageInputProps) {
  const [message, setMessage] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  return (
    <div className="border-t bg-secondary p-4">
      <form onSubmit={handleSend} className="flex items-center gap-2">
        <Button variant="ghost" size="icon">
          <Paperclip className="h-5 w-5 text-muted-foreground" />
        </Button>
        <Input
          placeholder="Type a message"
          className="flex-1 rounded-full bg-background px-4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {message ? (
          <Button type="submit" size="icon" className="rounded-full bg-primary text-primary-foreground">
            <SendHorizonal className="h-5 w-5" />
          </Button>
        ) : (
          <Button type="button" variant="ghost" size="icon">
            <Mic className="h-5 w-5 text-muted-foreground" />
          </Button>
        )}
      </form>
    </div>
  );
}
