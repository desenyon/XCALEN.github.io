import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Loading...',
};

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="space-y-4">
        <div className="flex items-center justify-center space-x-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-4 h-4 bg-cyan-400 rounded-full animate-pulse"
              style={{
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
        <div className="font-mono text-cyan-400 text-center text-sm">
          LOADING.SYSTEM...
        </div>
      </div>
    </div>
  );
}
