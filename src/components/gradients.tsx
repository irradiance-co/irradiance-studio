import React from 'react';
import { cn } from '@/lib/utils';

type GradientProps = {
  gradient: string;
  children: React.ReactNode;
  className?: string;
};

export const GradientXV = ({
  children,
  gradient = 'radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%)',
  className,
}: GradientProps) => {
  const combinedClassName = cn(
    'absolute inset-0 z-0',
    'h-full w-full items-center',
    className,
  );

  const style = {
    backgroundImage: gradient,
  };

  return (
    <div
      className={combinedClassName}
      style={style}>
      {children}
    </div>
  );
};

/**
 *
 * <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
 */
