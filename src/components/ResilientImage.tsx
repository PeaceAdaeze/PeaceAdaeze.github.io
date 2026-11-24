import { useState } from 'react';
import { Sprout } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  objectPosition?: string;
  loading?: 'eager' | 'lazy';
}

export function ResilientImage({
  src,
  alt,
  className = 'w-full h-full object-cover',
  objectPosition = 'center center',
  loading = 'lazy',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="w-full h-full bg-[#E9EDE6] border border-[#132A1E]/10 flex flex-col items-center justify-center p-6 text-center text-[#132A1E]"
      >
        <Sprout className="w-7 h-7 text-[#1F5137] mb-2" aria-hidden="true" />
        <p className="text-xs font-medium text-[#4B5850] max-w-xs">{alt}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      style={{ objectPosition }}
      className={className}
    />
  );
}
