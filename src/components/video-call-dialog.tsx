"use client";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PhoneOff, Mic, MicOff, Timer } from "lucide-react";
import Image from "next/image";
import { useState, type ReactNode, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";


export default function VideoCallDialog({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const { toast } = useToast();
  const [timer, setTimer] = useState(240); // 4 minutes in seconds

  useEffect(() => {
    if (isOpen) {
      setTimer(240); // Reset timer when dialog opens
      const interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer <= 1) {
            clearInterval(interval);
            setIsOpen(false);
            toast({
              title: "Tempo Esgotado",
              description: "Sua chamada de vídeo de 4 minutos terminou.",
              variant: "destructive",
            });
            return 0;
          }
          return prevTimer - 1;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isOpen, toast]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
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

            <div className="absolute top-4 left-4 bg-black/50 text-white p-2 rounded-lg flex items-center gap-2">
                <Timer className="h-5 w-5" />
                <span>{formatTime(timer)}</span>
            </div>

            <div className="absolute bottom-8 flex items-center justify-center gap-4">
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
