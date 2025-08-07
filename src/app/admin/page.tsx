import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Shield } from 'lucide-react';
import ModerationClient from '@/components/admin/moderation-client';

export default function AdminPage() {
  return (
    <div className="flex min-h-screen flex-col bg-muted/40">
       <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <Button asChild size="icon" variant="outline" className="sm:hidden">
          <Link href="/app">
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Back to App</span>
          </Link>
        </Button>
        <h1 className="flex items-center gap-2 text-xl font-semibold sm:text-2xl font-headline">
          <Shield className="h-6 w-6 text-primary" />
          <span>Moderation Dashboard</span>
        </h1>
        <div className="ml-auto">
          <Button asChild variant="outline">
            <Link href="/app">Back to Chat</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1 p-4 sm:p-6">
        <ModerationClient />
      </main>
    </div>
  );
}
