import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'lime';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  icon?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const PrimaryButton: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  icon = true,
  children,
  className,
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 cursor-pointer select-none active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-maroon focus-visible:outline-offset-2';

  const sizeClasses = {
    sm: 'text-xs sm:text-sm px-4 py-2 gap-1.5',
    md: 'text-sm sm:text-base px-6 py-3 gap-2',
    lg: 'text-base sm:text-lg px-7 py-3.5 gap-2.5',
  };

  const variantClasses = {
    primary:
      'bg-maroon hover:bg-maroon-dark text-white shadow-sm hover:shadow-md hover:-translate-y-0.5',
    secondary:
      'bg-[#F5EFE9] hover:bg-[#EFE8E0] text-forest-heading border border-[#E8DFD8] hover:border-maroon hover:-translate-y-0.5',
    ghost:
      'bg-transparent hover:bg-maroon/5 text-forest-heading',
    lime:
      'bg-maroon hover:bg-maroon-dark text-white font-semibold shadow-sm hover:-translate-y-0.5',
  };

  const combinedClassName = cn(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        <span>{children}</span>
        {icon && <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      <span>{children}</span>
      {icon && <span className="transition-transform duration-200">↗</span>}
    </button>
  );
};
