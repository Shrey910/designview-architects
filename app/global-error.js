'use client';

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-100">
          <h2 className="text-2xl font-serif font-light mb-4">Something went wrong!</h2>
          <p className="text-neutral-600 mb-6">We're sorry, but an error occurred while loading this page.</p>
          <button
            className="px-6 py-3 bg-accent-600 text-white font-sans text-sm uppercase tracking-wider hover:bg-black transition-colors"
            onClick={() => reset()}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}