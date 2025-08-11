"use client";

import { useState } from 'react';
import type { User } from '@/lib/types';
import { currentUser } from '@/lib/data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MoreVertical, Search } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserDashboard from './user-dashboard';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type ContactListProps = {
  users: User[];
  onSelectUser: (user: User) => void;
  selectedUser: User | null;
};

export default function ContactList({ users, onSelectUser, selectedUser }: ContactListProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex h-full flex-col">
      <header className="flex items-center justify-between border-b bg-secondary p-3">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={currentUser.avatar} alt={currentUser.name} data-ai-hint="avatar" />
            <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <h2 className="font-bold">{currentUser.name}</h2>
        </div>
        <div>
          <UserDashboard>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-5 w-5 text-muted-foreground" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild><div className='w-full'>Painel do Usuário</div></DropdownMenuItem>
                <DropdownMenuItem asChild><Link href="/admin">Admin</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link href="/">Sair</Link></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </UserDashboard>
        </div>
      </header>
      <div className="p-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input 
            placeholder="Buscar ou iniciar nova conversa" 
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            suppressHydrationWarning
          />
        </div>
      </div>
      <ScrollArea className="flex-1">
        <div className="flex flex-col">
          {filteredUsers.map(user => (
            <button
              key={user.id}
              onClick={() => onSelectUser(user)}
              className={cn(
                "flex w-full items-center gap-3 p-3 text-left transition-colors hover:bg-muted",
                selectedUser?.id === user.id ? "bg-accent text-accent-foreground hover:bg-accent" : ""
              )}
            >
              <Avatar className="relative">
                <AvatarImage src={user.avatar} alt={user.name} data-ai-hint="avatar" />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                {user.isOnline && (
                  <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-background" />
                )}
              </Avatar>
              <div className="flex-1">
                <h3 className="font-semibold">{user.name}</h3>
                <p className="text-sm text-muted-foreground truncate">
                  {user.lastSeen}
                </p>
              </div>
            </button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
