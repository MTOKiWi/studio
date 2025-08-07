"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Clock, Smartphone } from "lucide-react";
import type { ReactNode } from "react";

export default function UserDashboard({ children }: { children: ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl">Painel do Usuário</DialogTitle>
          <DialogDescription>
            Aqui está um resumo da sua atividade na plataforma.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Tempo Total de Chamada</CardTitle>
                    <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">2 horas e 15 minutos</div>
                    <p className="text-xs text-muted-foreground">Seu tempo total em chamadas de vídeo.</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Tempo de Chamada Diário</CardTitle>
                    <Smartphone className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">4 minutos</div>
                    <p className="text-xs text-muted-foreground">Seu limite de tempo para hoje.</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Status da Conta</CardTitle>
                    <CardDescription>Sua conta está ativa e pronta para uso.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-sm font-medium text-green-600">Conta Ativa</p>
                </CardContent>
            </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
}
