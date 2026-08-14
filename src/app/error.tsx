"use client";

import Link from "next/link";
import { useEffect } from "react";
import Button from "@/components/ui/Button";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="bg-white text-navy-900">
        <main className="flex min-h-screen items-center justify-center px-4 py-16">
          <div className="max-w-xl rounded-2xl border border-navy-200 bg-white p-8 text-center shadow-lg">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-electric-600">Something went wrong</p>
            <h1 className="mt-4 text-3xl font-bold">We couldn&apos;t complete that request.</h1>
            <p className="mt-4 text-base text-navy-600">Please try again or return to the homepage.</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button onClick={reset}>Try again</Button>
              <Link href="/" className="inline-flex items-center justify-center rounded-lg border-2 border-navy-300 px-4 py-2.5 font-medium text-navy-900 transition-colors hover:bg-navy-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-500 focus-visible:ring-offset-2">
                Back to home
              </Link>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
