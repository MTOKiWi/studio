"use client";

import { useEffect, useRef } from 'react';
import type { Message } from "@/lib/types";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import Image from 'next/image';

type MessageListProps = {
  messages: Message[];
  currentUser: string;
};

export default function MessageList({ messages, currentUser }: MessageListProps) {
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);
  
  return (
    <ScrollArea className="flex-1" viewportRef={scrollAreaRef}>
      <div className="p-4 space-y-4 bg-[url('https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg')] bg-center">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "flex items-end gap-2",
              message.senderId === currentUser ? "justify-end" : "justify-start"
            )}
          >
            <div
              className={cn(
                "max-w-xs md:max-w-md lg:max-w-lg rounded-lg px-3 py-2",
                message.senderId === currentUser
                  ? "bg-primary text-primary-foreground rounded-br-none"
                  : "bg-card text-card-foreground rounded-bl-none shadow-sm"
              )}
            >
              {message.type === 'image' && message.imageUrl && (
                  <Image 
                    src={message.imageUrl} 
                    alt="sent image" 
                    width={300} 
                    height={200}
                    data-ai-hint="photo scenery"
                    className="rounded-md mb-1" 
                  />
              )}
              <p className="whitespace-pre-wrap break-words">{message.text}</p>
              <p className="mt-1 text-xs text-right opacity-70">{message.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
