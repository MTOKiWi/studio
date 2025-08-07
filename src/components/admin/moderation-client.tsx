"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { runModeration } from '@/app/actions';
import type { ModerateChatOutput } from '@/ai/flows/moderate-chat';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ShieldAlert, ShieldCheck } from 'lucide-react';
import { Skeleton } from '../ui/skeleton';

const formSchema = z.object({
  text: z.string().min(1, 'O texto para moderar não pode estar vazio.'),
  userProfile: z.string().min(1, 'O perfil do usuário não pode estar vazio.'),
});

export default function ModerationClient() {
  const [result, setResult] = useState<ModerateChatOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: '',
      userProfile: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setResult(null);
    const moderationResult = await runModeration(values);
    setResult(moderationResult);
    setIsLoading(false);
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Testar Moderação</CardTitle>
          <CardDescription>Insira o texto e um perfil de usuário para verificar violações de política.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="text"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Texto da Mensagem</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Digite uma mensagem de chat..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="userProfile"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Informações do Perfil do Usuário</FormLabel>
                    <FormControl>
                      <Input placeholder="ex: João Silva, entrou há 2 dias" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading}>
                {isLoading ? 'Moderando...' : 'Moderar'}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Resultado da Moderação</CardTitle>
          <CardDescription>O resultado da verificação de moderação aparecerá aqui.</CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading && (
            <div className="space-y-4">
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-10 w-1/2" />
            </div>
          )}
          {result && (
            <Alert variant={result.isSafe ? 'default' : 'destructive'}>
              {result.isSafe ? (
                <ShieldCheck className="h-4 w-4" />
              ) : (
                <ShieldAlert className="h-4 w-4" />
              )}
              <AlertTitle>{result.isSafe ? 'Conteúdo Seguro' : 'Violação Detectada'}</AlertTitle>
              <AlertDescription>{result.reason}</AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
