import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const baseStyles = [
  'inline-flex mx-auto items-center justify-center',
  'rounded-xl text-sm text-center font-medium',
  'transition-colors duration-300',
  'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
  'disabled:cursor-not-allowed disabled:opacity-50',
];

const selectClasslist = [
  'bg-white text-carbon-500 border border-carbon-100',
  'rounded-xl shadow-md ',
  'focus:ring-2 focus:ring-elite-800/60 focus:border-elite-800',
  'hover:bg-carbon-50',
];

const purchaseClasslist = [
  'bg-elite-900 text-carbon-700 border border-carbon-200',
  'rounded-xl shadow-sm',
  'hover:bg-elite-900 hover:text-elite-700',
  'disabled:bg-carbon-100',
];

const downloadClasslist = [
  'bg-carbon-50 text-carbon-800 rounded-xl shadow-md',
  'hover:bg-carbon-50 active:shadow-inner',
  'gap-2',
];

const signUpClasslist = [
  'text-carbon-500 rounded-md shadow',
  'hover:text-radiance-600 active:shadow-inner',
  'gap-2 bg-white',
];

/**
 *
 * size: 'default' | 'xs' | 'sm' | 'lg' ;
 */
const sizeClasslist = {
  default: ['h-9 px-4'],
  xs: ['h-9 px-3', 'text-xs'],
  sm: ['h-10 px-4', 'text-sm'],
  lg: ['h-10 px-8', 'text-lg'],
  icon: ['h-9 w-9'],
};

const variants = cva(
  baseStyles.join(' '),

  {
    variants: {
      variant: {
        default:
          'bg-white text-carbon-400 shadow-md hover:bg-carbon-50 rounded-lg',
        selectButton: selectClasslist.join(' '),
        purchaseLink: purchaseClasslist.join(' '),
        downloadApp: downloadClasslist.join(' '),
        signUpNow: signUpClasslist.join(' '),
      },
      size: {
        default: sizeClasslist.default.join(' '),
        xs: sizeClasslist.xs.join(' '),
        sm: sizeClasslist.sm.join(' '),
        lg: sizeClasslist.lg.join(' '),
        icon: sizeClasslist.icon.join(' '),
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'sm',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof variants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(variants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = 'Button';
export { Button, variants };

/**
 *
 * <button class="group h-8 select-none rounded-lg bg-white px-3 text-sm leading-8 text-zinc-950
 * shadow-[0_-1px_0_0px_#d4d4d8_inset,0_0_0_1px_#f4f4f5_inset,0_0.5px_0_1.5px_#fff_inset]
 * hover:bg-zinc-50 hover:via-zinc-900 hover:to-zinc-800
 *
 * active:shadow-[-1px_0px_1px_0px_#e4e4e7_inset,1px_0px_1px_0px_#e4e4e7_inset,0px_0.125rem_1px_0px_#d4d4d8_inset]">
 */
