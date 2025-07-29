import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ className = '', size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-2xl'
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {/* Circular Logo Icon */}
      <div className={`${sizeClasses[size]} relative`}>
        {/* Outer circle */}
        <div className="w-full h-full rounded-full border-2 border-[#2a9d8f] flex items-center justify-center">
          {/* Inner circle */}
          <div className="w-3/4 h-3/4 rounded-full border border-[#2a9d8f] flex items-center justify-center">
            {/* Plant sprout icon */}
            <svg 
              className="w-1/2 h-1/2 text-[#2a9d8f]" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM12 8C13.1 8 14 8.9 14 10C14 11.1 13.1 12 12 12C10.9 12 10 11.1 10 10C10 8.9 10.9 8 12 8ZM12 14C13.1 14 14 14.9 14 16C14 17.1 13.1 18 12 18C10.9 18 10 17.1 10 16C10 14.9 10.9 14 12 14Z"/>
              <path d="M8 6C9.1 6 10 6.9 10 8C10 9.1 9.1 10 8 10C6.9 10 6 9.1 6 8C6 6.9 6.9 6 8 6ZM8 12C9.1 12 10 12.9 10 14C10 15.1 9.1 16 8 16C6.9 16 6 15.1 6 14C6 12.9 6.9 12 8 12Z"/>
              <path d="M16 6C17.1 6 18 6.9 18 8C18 9.1 17.1 10 16 10C14.9 10 14 9.1 14 8C14 6.9 14.9 6 16 6ZM16 12C17.1 12 18 12.9 18 14C18 15.1 17.1 16 16 16C14.9 16 14 15.1 14 14C14 12.9 14.9 12 16 12Z"/>
            </svg>
          </div>
        </div>
      </div>
      
      {/* Text Logo */}
      <div className="flex flex-col">
        <span className={`font-bold text-[#2a9d8f] ${textSizes[size]} leading-none`}>
          KISAAN
        </span>
        <span className={`font-medium text-[#2a9d8f] ${size === 'sm' ? 'text-xs' : size === 'md' ? 'text-sm' : 'text-lg'} leading-none`}>
          DIRECT
        </span>
      </div>
    </div>
  );
} 