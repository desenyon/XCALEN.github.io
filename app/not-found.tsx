import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-6xl font-[family-name:var(--font-space)] font-bold text-white mb-3">404</h1>
        <p className="text-sm text-white/40 mb-8">This page does not exist.</p>
        <Link
          href="/"
          className="inline-block px-5 py-2.5 text-sm text-[#0a0a0a] bg-[#c8ff00] rounded-xl font-medium hover:bg-[#d4ff33] transition-colors"
        >
          Back home
        </Link>
      </div>
    </div>
  );
}
