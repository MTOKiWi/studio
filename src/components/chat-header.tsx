"use client";

import type { User } from "@/lib/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MoreVertical, Search, ArrowLeft, Video } from "lucide-react";
import VideoCallDialog from "./video-call-dialog";

type ChatHeaderProps = {
  user: User;
  onBack: () => void;
};

export default function ChatHeader({ user, onBack }: ChatHeaderProps) {
  return (
    <div className="flex items-center justify-between border-b bg-secondary p-3">
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="md:hidden" onClick={onBack}>
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <Avatar>
          <AvatarImage src={user.avatar} alt={user.name} data-ai-hint="avatar" />
          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="font-bold">{user.name}</h2>
          <p className="text-sm text-muted-foreground">{user.lastSeen}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <VideoCallDialog>
            <Button variant="ghost" size="icon">
                <Video className="h-5 w-5 text-muted-foreground" />
            </Button>
        </VideoCallDialog>
        <Button variant="ghost" size="icon">
          <Search className="h-5 w-5 text-muted-foreground" />
        </Button>
        <Button variant="ghost" size="icon">
          <MoreVertical className="h-5 w-5 text-muted-foreground" />
        </Button>
      </div>
    </div>
  );
}
