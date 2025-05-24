import React from 'react';
import { cn } from '@/lib/utils';
import { 
  FontSize, 
  FontWeight, 
  LineHeight, 
  LetterSpacing,
  fontSizes, 
  fontWeights, 
  lineHeights, 
  letterSpacings,
  headingDefaults,
  bodyDefaults,
  captionDefaults,
  labelDefaults
} from '../../tokens/typography';

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'large' | 'small' | 'caption' | 'label';
  size?: FontSize;
  weight?: FontWeight;
  lineHeight?: LineHeight;
  letterSpacing?: LetterSpacing;
  as?: keyof JSX.IntrinsicElements;
  truncate?: boolean;
  children: React.ReactNode;
}

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ 
    variant = 'p', 
    size, 
    weight, 
    lineHeight, 
    letterSpacing, 
    as, 
    truncate = false,
    className,
    children,
    ...props 
  }, ref) => {
    let Component: keyof JSX.IntrinsicElements = as || 'p';
    let variantClasses = '';

    // Set defaults based on variant
    switch (variant) {
      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
      case 'h5':
      case 'h6':
        Component = as || variant;
        const headingDefault = headingDefaults[variant];
        size = size || headingDefault.size;
        weight = weight || headingDefault.weight;
        lineHeight = lineHeight || headingDefault.lineHeight;
        letterSpacing = letterSpacing || headingDefault.letterSpacing;
        break;

      case 'large':
      case 'small':
        Component = as || 'p';
        const bodyDefault = bodyDefaults[variant];
        size = size || bodyDefault.size;
        weight = weight || bodyDefault.weight;
        lineHeight = lineHeight || bodyDefault.lineHeight;
        letterSpacing = letterSpacing || bodyDefault.letterSpacing;
        break;

      case 'caption':
        Component = as || 'span';
        size = size || captionDefaults.size;
        weight = weight || captionDefaults.weight;
        lineHeight = lineHeight || captionDefaults.lineHeight;
        letterSpacing = letterSpacing || captionDefaults.letterSpacing;
        break;

      case 'label':
        Component = as || 'label';
        size = size || labelDefaults.size;
        weight = weight || labelDefaults.weight;
        lineHeight = lineHeight || labelDefaults.lineHeight;
        letterSpacing = letterSpacing || labelDefaults.letterSpacing;
        break;

      case 'p':
      default:
        Component = as || 'p';
        size = size || bodyDefaults.base.size;
        weight = weight || bodyDefaults.base.weight;
        lineHeight = lineHeight || bodyDefaults.base.lineHeight;
        letterSpacing = letterSpacing || bodyDefaults.base.letterSpacing;
        break;
    }

    // Combine all class names
    const classes = cn(
      fontSizes[size],
      fontWeights[weight],
      lineHeights[lineHeight],
      letterSpacings[letterSpacing],
      truncate && 'truncate',
      className
    );

    return (
      <Component
        ref={ref as any}
        className={classes}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Typography.displayName = 'Typography';

export default Typography;