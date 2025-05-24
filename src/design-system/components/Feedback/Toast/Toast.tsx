import React, { useEffect, useState, forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const toastVariants = cva(
  'group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-4 shadow-md transition-all',
  {
    variants: {
      variant: {
        default: 'bg-background border-border',
        success: 'bg-success-50 border-success-200',
        error: 'bg-destructive-50 border-destructive-200',
        warning: 'bg-warning-50 border-warning-200',
        info: 'bg-primary-50 border-primary-200',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface ToastProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof toastVariants> {
  title?: string;
  description?: string;
  action?: React.ReactNode;
  open?: boolean;
  duration?: number;
  onClose?: () => void;
}

export const Toast = forwardRef<HTMLDivElement, ToastProps>(
  ({
    className,
    variant,
    title,
    description,
    action,
    open = true,
    duration = 5000,
    onClose,
    ...props
  }, ref) => {
    const [isVisible, setIsVisible] = useState(open);
    
    useEffect(() => {
      setIsVisible(open);
    }, [open]);

    useEffect(() => {
      if (!isVisible) return;
      
      const timer = setTimeout(() => {
        setIsVisible(false);
        onClose?.();
      }, duration);
      
      return () => clearTimeout(timer);
    }, [isVisible, duration, onClose]);
    
    const handleClose = () => {
      setIsVisible(false);
      onClose?.();
    };
    
    // Handle escape key press
    useEffect(() => {
      const handleEscapeKey = (event: KeyboardEvent) => {
        if (event.key === 'Escape' && isVisible) {
          handleClose();
        }
      };
      
      document.addEventListener('keydown', handleEscapeKey);
      return () => document.removeEventListener('keydown', handleEscapeKey);
    }, [isVisible]);
    
    return (
      <AnimatePresence>
        {isVisible && (
          <motion.div
            ref={ref}
            role="alert"
            aria-live="polite"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className={cn(toastVariants({ variant }), className)}
            {...props}
          >
            <div className="flex flex-col gap-1">
              {title && <div className="text-sm font-semibold">{title}</div>}
              {description && <div className="text-sm opacity-90">{description}</div>}
            </div>
            <div className="flex items-center gap-2">
              {action}
              <button
                type="button"
                onClick={handleClose}
                aria-label="Close"
                className="rounded-full p-1 transition-colors hover:bg-background/10 focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
);

Toast.displayName = 'Toast';

export default Toast;