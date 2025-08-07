"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { gifts } from "@/lib/data";
import { Clock, Gift, PlusCircle } from "lucide-react";
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
            Aqui está um resumo da sua conta.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Tempo de Chamada Restante</CardTitle>
                    <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">35 minutos</div>
                    <p className="text-xs text-muted-foreground">do seu pacote de 1 hora</p>
                    <Button size="sm" className="mt-4">
                        <PlusCircle className="mr-2 h-4 w-4" /> Comprar Mais Tempo
                    </Button>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Presentes Recebidos</CardTitle>
                    <Gift className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">R$ 80,00</div>
                    <p className="text-xs text-muted-foreground">Valor total de presentes recebidos</p>
                </CardContent>
            </Card>
        </div>
        <div>
            <h3 className="text-lg font-semibold mb-2">Histórico de Presentes</h3>
             <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead>Presente</TableHead>
                    <TableHead>De</TableHead>
                    <TableHead>Data</TableHead>
                    <TableHead className="text-right">Valor</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {gifts.map(gift => (
                        <TableRow key={gift.id}>
                            <TableCell className="font-medium">{gift.name}</TableCell>
                            <TableCell>{gift.senderName}</TableCell>
                            <TableCell>{gift.date}</TableCell>
                            <TableCell className="text-right">R$ {gift.value.toFixed(2)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
      </DialogContent>
    </Dialog>
  );
}
