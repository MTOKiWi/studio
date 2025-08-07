"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PhoneOff, Gift } from "lucide-react";
import Image from "next/image";
import { useState, type ReactNode } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const gifts = [
    { name: '💍 Anel', value: 10 },
    { name: '📿 Colar', value: 20 },
    { name: '💎 Diamante', value: 50 },
];

export default function VideoCallDialog({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-none w-screen h-screen flex flex-col p-0 m-0 !rounded-none">
        <div className="relative flex-1 w-full h-full bg-black flex items-center justify-center">
            <Image src="https://placehold.co/1920x1080.png" layout="fill" objectFit="cover" alt="Remote user video" data-ai-hint="person talking" />
            
            <div className="absolute top-4 right-4 h-48 w-36 rounded-lg overflow-hidden border-2 border-white/50 shadow-lg">
                <Image src="https://placehold.co/240x320.png" layout="fill" objectFit="cover" alt="Local user video" data-ai-hint="person selfie" />
            </div>

            <div className="absolute bottom-8 flex items-center justify-center gap-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="secondary" size="icon" className="rounded-full h-16 w-16 bg-black/50 hover:bg-black/70 border-2 border-white/30">
                        <Gift className="h-7 w-7 text-white" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center" className="mb-2 bg-background/80 backdrop-blur-sm border-white/20">
                    <DialogHeader>
                      <DialogTitle className="px-2 py-1 text-base">Enviar um Presente</DialogTitle>
                    </DialogHeader>
                    {gifts.map(gift => (
                        <DropdownMenuItem key={gift.name} className="flex justify-between gap-4">
                            <span>{gift.name}</span>
                            <span className="font-semibold">R$ {gift.value}</span>
                        </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

                <Button variant="destructive" size="icon" className="rounded-full h-16 w-16" onClick={() => setIsOpen(false)}>
                    <PhoneOff className="h-7 w-7" />
                </Button>
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
