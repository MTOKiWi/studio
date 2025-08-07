"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PhoneOff, Gift, Mic, MicOff } from "lucide-react";
import Image from "next/image";
import { useState, type ReactNode } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";

const gifts = [
    { name: '💍 Anel', value: 10 },
    { name: '📿 Colar', value: 20 },
    { name: '💎 Diamante', value: 50 },
];

export default function VideoCallDialog({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const { toast } = useToast();

  const handleSendGift = (gift: { name: string; value: number }) => {
    // Lógica para enviar o presente (ex: chamada para o backend)
    console.log(`Enviando presente: ${gift.name}`);
    toast({
      title: "Presente Enviado!",
      description: `Você enviou um ${gift.name} com sucesso.`,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-none w-screen h-screen flex flex-col p-0 m-0 !rounded-none">
        <div className="relative flex-1 w-full h-full bg-black flex items-center justify-center">
            <Image src="https://placehold.co/1920x1080.png" layout="fill" objectFit="cover" alt="Remote user video" data-ai-hint="person talking" />
            
            <div className="absolute top-4 right-4 h-[150px] w-[100px] rounded-lg overflow-hidden border-2 border-white/50 shadow-lg">
                <Image src="https://placehold.co/100x150.png" layout="fill" objectFit="cover" alt="Local user video" data-ai-hint="person selfie" />
            </div>

            <div className="absolute bottom-8 flex items-center justify-center gap-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="secondary" size="icon" className="rounded-full h-16 w-16 bg-yellow-400/80 hover:bg-yellow-400/90 border-2 border-white/50 text-black shadow-lg animate-pulse">
                        <Gift className="h-7 w-7" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center" className="mb-2 bg-background/80 backdrop-blur-sm border-white/20">
                    <DialogHeader>
                      <DialogTitle className="px-2 py-1 text-base">Enviar um Presente</DialogTitle>
                    </DialogHeader>
                    {gifts.map(gift => (
                        <DropdownMenuItem key={gift.name} className="flex justify-between gap-4 cursor-pointer" onClick={() => handleSendGift(gift)}>
                            <span>{gift.name}</span>
                            <span className="font-semibold">R$ {gift.value}</span>
                        </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

                <Button 
                    variant="secondary" 
                    size="icon" 
                    className="rounded-full h-16 w-16 bg-gray-300 hover:bg-gray-400 text-black shadow-lg data-[muted=true]:bg-destructive data-[muted=true]:text-white"
                    onClick={() => setIsMuted(prev => !prev)}
                    data-muted={isMuted}
                >
                    {isMuted ? <MicOff className="h-7 w-7" /> : <Mic className="h-7 w-7" />}
                </Button>

                <Button variant="destructive" size="icon" className="rounded-full h-16 w-16" onClick={() => setIsOpen(false)}>
                    <PhoneOff className="h-7 w-7" />
                </Button>
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
