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
  text: z.string().min(1, 'Text to moderate cannot be empty.'),
  userProfile: z.string().min(1, 'User profile cannot be empty.'),
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
          <CardTitle>Test Moderation</CardTitle>
          <CardDescription>Enter text and a user profile to check for policy violations.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="text"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message Text</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Enter a chat message..." {...field} />
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
                    <FormLabel>User Profile Information</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., John Doe, joined 2 days ago" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading}>
                {isLoading ? 'Moderating...' : 'Moderate'}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Moderation Result</CardTitle>
          <CardDescription>The result of the moderation check will appear here.</CardDescription>
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
              <AlertTitle>{result.isSafe ? 'Content is Safe' : 'Violation Detected'}</AlertTitle>
              <AlertDescription>{result.reason}</AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
