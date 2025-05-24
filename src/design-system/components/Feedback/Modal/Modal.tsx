import React, { useEffect, useRef, forwardRef } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Typography } from '../../Typography';

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  hideCloseButton?: boolean;
  children: React.ReactNode;
}

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({
    className,
    open,
    onClose,
    title,
    description,
    size = 'md',
    hideCloseButton = false,
    children,
    ...props
  }, ref) => {
    const modalRef = useRef<HTMLDivElement>(null);
    
    // Close modal when Escape key is pressed
    useEffect(() => {
      const handleEscapeKey = (event: KeyboardEvent) => {
        if (event.key === 'Escape' && open) {
          onClose();
        }
      };
      
      document.addEventListener('keydown', handleEscapeKey);
      return () => document.removeEventListener('keydown', handleEscapeKey);
    }, [open, onClose]);
    
    // Prevent scrolling when modal is open
    useEffect(() => {
      if (open) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
      
      return () => {
        document.body.style.overflow = '';
      };
    }, [open]);
    
    // Close modal when clicking outside
    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    
    const getMaxWidthClass = () => {
      switch (size) {
        case 'sm': return 'max-w-sm';
        case 'md': return 'max-w-md';
        case 'lg': return 'max-w-lg';
        case 'xl': return 'max-w-xl';
        case 'full': return 'max-w-full mx-4';
        default: return 'max-w-md';
      }
    };
    
    return (
      <AnimatePresence>
        {open && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto"
            aria-modal="true"
            role="dialog"
            aria-labelledby={title ? 'modal-title' : undefined}
            aria-describedby={description ? 'modal-description' : undefined}
            onClick={handleBackdropClick}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/40"
            />
            
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{
                type: 'spring',
                damping: 20,
                stiffness: 300
              }}
              className={cn(
                'relative z-50 w-full rounded-lg bg-background p-6 shadow-lg',
                getMaxWidthClass(),
                className
              )}
              {...props}
            >
              {!hideCloseButton && (
                <button
                  type="button"
                  onClick={onClose}
                  className="absolute right-4 top-4 rounded-full p-1 text-muted-foreground transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring"
                  aria-label="Close modal"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
              
              {(title || description) && (
                <div className="mb-6">
                  {title && (
                    <Typography id="modal-title" variant="h4" className="mb-2">
                      {title}
                    </Typography>
                  )}
                  {description && (
                    <Typography id="modal-description" variant="small" className="text-muted-foreground">
                      {description}
                    </Typography>
                  )}
                </div>
              )}
              
              {children}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    );
  }
);

Modal.displayName = 'Modal';

export default Modal;