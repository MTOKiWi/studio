"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Video, PhoneOff, Mic, MicOff, VideoOff, Gift, Clock } from "lucide-react";
import Image from "next/image";
import { useState, type ReactNode } from "react";
import { Badge } from "./ui/badge";

const gifts = [
    { name: '💍 Anel', value: 10 },
    { name: '📿 Colar', value: 20 },
    { name: '💎 Diamante', value: 50 },
];

export default function VideoCallDialog({ children }: { children: ReactNode }) {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl h-[90vh] flex flex-col p-0">
        <DialogHeader className="p-4 border-b">
          <DialogTitle>Chamada de Vídeo</DialogTitle>
        </DialogHeader>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 p-4 overflow-hidden">
            <div className="md:col-span-2 relative h-full w-full rounded-lg overflow-hidden bg-black flex items-center justify-center">
                <Image src="https://placehold.co/1280x720.png" layout="fill" objectFit="cover" alt="Remote user video" data-ai-hint="person talking" />
                <div className="absolute top-2 left-2">
                    <Badge variant="secondary" className="bg-black/50 text-white">
                        <Clock className="h-3 w-3 mr-1" />
                        34:12 restantes
                    </Badge>
                </div>
                <div className="absolute bottom-4 right-4 h-32 w-24 rounded-lg overflow-hidden border-2 border-white">
                    <Image src="https://placehold.co/240x320.png" layout="fill" objectFit="cover" alt="Local user video" data-ai-hint="person selfie" />
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div className="bg-muted rounded-lg p-4 flex-1">
                    <h3 className="font-bold mb-4 flex items-center gap-2"><Gift className="h-5 w-5 text-primary" /> Enviar um Presente</h3>
                    <div className="space-y-2">
                        {gifts.map(gift => (
                            <Button key={gift.name} variant="outline" className="w-full justify-between">
                                <span>{gift.name}</span>
                                <span className="font-semibold">R$ {gift.value}</span>
                            </Button>
                        ))}
                    </div>
                    <p className="text-xs text-muted-foreground mt-4">O valor é enviado diretamente para a chave Pix do usuário.</p>
                </div>
                <div className="bg-muted rounded-lg p-4">
                    <h3 className="font-bold mb-4">Controles</h3>
                     <div className="flex justify-around">
                        <Button variant={isMuted ? "destructive" : "secondary"} size="icon" className="rounded-full h-12 w-12" onClick={() => setIsMuted(!isMuted)}>
                            {isMuted ? <MicOff /> : <Mic />}
                        </Button>
                        <Button variant={isVideoOff ? "destructive" : "secondary"} size="icon" className="rounded-full h-12 w-12" onClick={() => setIsVideoOff(!isVideoOff)}>
                            {isVideoOff ? <VideoOff /> : <Video />}
                        </Button>
                        <Button variant="destructive" size="icon" className="rounded-full h-12 w-12">
                            <PhoneOff />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
