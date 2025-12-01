import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-100 px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-6xl font-serif font-light mb-6">404</h1>
        <h2 className="text-3xl font-serif font-light mb-6">Page Not Found</h2>
        <p className="text-neutral-600 mb-8">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/"
          className="inline-block px-6 py-3 bg-accent-600 text-white font-sans text-sm uppercase tracking-wider hover:bg-black transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}