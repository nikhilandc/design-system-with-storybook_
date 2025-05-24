import React, { forwardRef } from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import { cn } from '@/lib/utils';
import { Typography } from '../../Typography';

export interface CheckboxProps extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  label?: string;
  error?: string;
  hint?: string;
}

export const Checkbox = forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, label, error, hint, ...props }, ref) => {
  const id = props.id || `checkbox-${Math.random().toString(36).substring(2, 9)}`;
  
  return (
    <div className="flex flex-col space-y-2">
      <div className="flex items-center space-x-2">
        <CheckboxPrimitive.Root
          ref={ref}
          id={id}
          className={cn(
            'peer h-4 w-4 shrink-0 rounded-sm border border-primary',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
            'disabled:cursor-not-allowed disabled:opacity-50',
            'data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
            error ? 'border-destructive' : 'border-input',
            className
          )}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={
            error ? `${id}-error` : 
            hint ? `${id}-hint` : undefined
          }
          {...props}
        >
          <CheckboxPrimitive.Indicator
            className={cn('flex items-center justify-center text-current')}
          >
            <CheckIcon className="h-3.5 w-3.5" />
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
        {label && (
          <label
            htmlFor={id}
            className={cn(
              'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
              error ? 'text-destructive' : 'text-foreground'
            )}
          >
            {label}
          </label>
        )}
      </div>
      {error && (
        <Typography 
          variant="small" 
          className="text-destructive" 
          id={`${id}-error`}
        >
          {error}
        </Typography>
      )}
      {hint && !error && (
        <Typography 
          variant="small" 
          className="text-muted-foreground" 
          id={`${id}-hint`}
        >
          {hint}
        </Typography>
      )}
    </div>
  );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;