export type FontSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
export type FontWeight = 'normal' | 'medium' | 'semibold' | 'bold';
export type LineHeight = 'none' | 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose';
export type LetterSpacing = 'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest';

export const fontSizes: Record<FontSize, string> = {
  'xs': 'text-xs', // 0.75rem
  'sm': 'text-sm', // 0.875rem
  'base': 'text-base', // 1rem
  'lg': 'text-lg', // 1.125rem
  'xl': 'text-xl', // 1.25rem
  '2xl': 'text-2xl', // 1.5rem
  '3xl': 'text-3xl', // 1.875rem
  '4xl': 'text-4xl', // 2.25rem
  '5xl': 'text-5xl', // 3rem
  '6xl': 'text-6xl', // 3.75rem
};

export const fontWeights: Record<FontWeight, string> = {
  'normal': 'font-normal', // 400
  'medium': 'font-medium', // 500
  'semibold': 'font-semibold', // 600
  'bold': 'font-bold', // 700
};

export const lineHeights: Record<LineHeight, string> = {
  'none': 'leading-none', // 1
  'tight': 'leading-tight', // 1.25
  'snug': 'leading-snug', // 1.375
  'normal': 'leading-normal', // 1.5
  'relaxed': 'leading-relaxed', // 1.625
  'loose': 'leading-loose', // 2
};

export const letterSpacings: Record<LetterSpacing, string> = {
  'tighter': 'tracking-tighter', // -0.05em
  'tight': 'tracking-tight', // -0.025em
  'normal': 'tracking-normal', // 0em
  'wide': 'tracking-wide', // 0.025em
  'wider': 'tracking-wider', // 0.05em
  'widest': 'tracking-widest', // 0.1em
};

export const headingDefaults = {
  h1: {
    size: '5xl' as FontSize,
    weight: 'bold' as FontWeight,
    lineHeight: 'tight' as LineHeight,
    letterSpacing: 'tight' as LetterSpacing,
  },
  h2: {
    size: '4xl' as FontSize,
    weight: 'bold' as FontWeight,
    lineHeight: 'tight' as LineHeight,
    letterSpacing: 'tight' as LetterSpacing,
  },
  h3: {
    size: '3xl' as FontSize,
    weight: 'semibold' as FontWeight,
    lineHeight: 'snug' as LineHeight,
    letterSpacing: 'normal' as LetterSpacing,
  },
  h4: {
    size: '2xl' as FontSize,
    weight: 'semibold' as FontWeight,
    lineHeight: 'snug' as LineHeight,
    letterSpacing: 'normal' as LetterSpacing,
  },
  h5: {
    size: 'xl' as FontSize,
    weight: 'semibold' as FontWeight,
    lineHeight: 'normal' as LineHeight,
    letterSpacing: 'normal' as LetterSpacing,
  },
  h6: {
    size: 'lg' as FontSize,
    weight: 'semibold' as FontWeight,
    lineHeight: 'normal' as LineHeight,
    letterSpacing: 'normal' as LetterSpacing,
  },
};

export const bodyDefaults = {
  large: {
    size: 'lg' as FontSize,
    weight: 'normal' as FontWeight,
    lineHeight: 'relaxed' as LineHeight,
    letterSpacing: 'normal' as LetterSpacing,
  },
  base: {
    size: 'base' as FontSize,
    weight: 'normal' as FontWeight,
    lineHeight: 'relaxed' as LineHeight,
    letterSpacing: 'normal' as LetterSpacing,
  },
  small: {
    size: 'sm' as FontSize,
    weight: 'normal' as FontWeight,
    lineHeight: 'relaxed' as LineHeight,
    letterSpacing: 'normal' as LetterSpacing,
  },
};

export const captionDefaults = {
  size: 'xs' as FontSize,
  weight: 'normal' as FontWeight,
  lineHeight: 'normal' as LineHeight,
  letterSpacing: 'wide' as LetterSpacing,
};

export const labelDefaults = {
  size: 'sm' as FontSize,
  weight: 'medium' as FontWeight,
  lineHeight: 'normal' as LineHeight,
  letterSpacing: 'wide' as LetterSpacing,
};