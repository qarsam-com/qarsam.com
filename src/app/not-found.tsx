import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-16">
      <div className="max-w-xl rounded-2xl border border-navy-200 bg-white p-8 text-center shadow-lg">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-electric-600">404</p>
        <h1 className="mt-4 text-3xl font-bold text-navy-900">Page not found</h1>
        <p className="mt-4 text-base text-navy-600">The page you&apos;re looking for doesn&apos;t exist or may have moved.</p>
        <Link href="/" className="mt-8 inline-flex items-center justify-center rounded-lg bg-electric-600 px-4 py-2.5 font-medium text-white transition-colors hover:bg-electric-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-500 focus-visible:ring-offset-2">
          Return home
        </Link>
      </div>
    </main>
  );
}
