// components/Logo.tsx
import Image from 'next/image';

interface LogoProps {
  size?: number;        // icon size in px (default: 36)
  showText?: boolean;   // show "VentureReady.ai" wordmark (default: true)
  className?: string;   // wrapper className
  textClassName?: string; // override text color/style
}

export default function Logo({
  size = 36,
  showText = true,
  className = '',
  textClassName = 'text-white',
}: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <Image
        src="/logo-512.png"
        alt="VentureReady.ai"
        width={size}
        height={size}
        priority
        className="flex-shrink-0"
      />
      {showText && (
        <span
          className={`font-bold tracking-tight leading-none ${textClassName}`}
          style={{ fontSize: Math.round(size * 0.52) }}
        >
          VentureReady
          <span className="text-teal-400">.ai</span>
        </span>
      )}
    </div>
  );
}
