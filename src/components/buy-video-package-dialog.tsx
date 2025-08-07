"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Loader2, Video } from "lucide-react";
import type { ReactNode } from "react";

export function BuyVideoPackageDialog({ children, onConfirm, isBuying }: { children: ReactNode, onConfirm: () => void, isBuying: boolean }) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {children}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Video size={32} />
          </div>
          <AlertDialogTitle className="text-center">Pacote de Videochamada</AlertDialogTitle>
          <AlertDialogDescription className="text-center">
            Para iniciar uma chamada de vídeo, você precisa adquirir um pacote. 
            Deseja adquirir o pacote de 1 hora por R$ 10,00?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="sm:justify-center">
          <AlertDialogCancel disabled={isBuying}>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm} disabled={isBuying}>
            {isBuying && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isBuying ? 'Processando...' : 'Sim, comprar agora'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
