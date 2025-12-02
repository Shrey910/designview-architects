'use client';

import Link from 'next/link';

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-100 px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-6xl font-serif font-light mb-6">500</h1>
        <h2 className="text-3xl font-serif font-light mb-6">Server Error</h2>
        <p className="text-neutral-600 mb-8">
          Sorry, something went wrong on our end. We're working to fix the issue.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="px-6 py-3 bg-accent-600 text-white font-sans text-sm uppercase tracking-wider hover:bg-black transition-colors"
            onClick={() => reset()}
          >
            Try again
          </button>
          <Link 
            href="/"
            className="px-6 py-3 border border-accent-600 text-accent-600 font-sans text-sm uppercase tracking-wider hover:bg-accent-600 hover:text-white transition-colors text-center"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}