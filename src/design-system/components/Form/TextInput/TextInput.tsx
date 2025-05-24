import React, { useState, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { AlertCircle } from 'lucide-react';
import { Typography } from '../../Typography';

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  fullWidth?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  isLoading?: boolean;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({
    className,
    label,
    error,
    hint,
    fullWidth = false,
    disabled = false,
    leadingIcon,
    trailingIcon,
    isLoading = false,
    ...props
  }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      if (props.onFocus) {
        props.onFocus(e);
      }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      if (props.onBlur) {
        props.onBlur(e);
      }
    };

    const inputClasses = cn(
      'flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background',
      'file:border-0 file:bg-transparent file:text-sm file:font-medium',
      'placeholder:text-muted-foreground',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-50',
      error ? 'border-destructive focus-visible:ring-destructive' : 'border-input',
      leadingIcon && 'pl-10',
      trailingIcon && 'pr-10',
      className
    );

    return (
      <div className={cn('flex flex-col space-y-2', fullWidth ? 'w-full' : 'w-80')}>
        {label && (
          <Typography 
            variant="label" 
            className={cn(
              'text-sm font-medium',
              error ? 'text-destructive' : 'text-foreground'
            )}
          >
            {label}
          </Typography>
        )}
        <div className="relative">
          {leadingIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              {leadingIcon}
            </div>
          )}
          <input
            ref={ref}
            disabled={disabled || isLoading}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={
              error ? `${props.id || props.name}-error` : 
              hint ? `${props.id || props.name}-hint` : undefined
            }
            className={inputClasses}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...props}
          />
          {(error || trailingIcon || isLoading) && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              {error && !trailingIcon && !isLoading && (
                <AlertCircle className="h-5 w-5 text-destructive" />
              )}
              {isLoading ? (
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" />
              ) : trailingIcon ? (
                trailingIcon
              ) : null}
            </div>
          )}
        </div>
        {error && (
          <Typography 
            variant="small" 
            className="text-destructive" 
            id={`${props.id || props.name}-error`}
          >
            {error}
          </Typography>
        )}
        {hint && !error && (
          <Typography 
            variant="small" 
            className="text-muted-foreground" 
            id={`${props.id || props.name}-hint`}
          >
            {hint}
          </Typography>
        )}
      </div>
    );
  }
);

TextInput.displayName = 'TextInput';

export default TextInput;