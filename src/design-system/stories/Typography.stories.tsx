import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '../components/Typography';

const meta: Meta<typeof Typography> = {
  title: 'Design System/Typography',
  component: Typography,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'large', 'small', 'caption', 'label'],
      description: 'The typography variant to use',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl'],
      description: 'Override the default font size for the variant',
    },
    weight: {
      control: 'select',
      options: ['normal', 'medium', 'semibold', 'bold'],
      description: 'Override the default font weight for the variant',
    },
    lineHeight: {
      control: 'select',
      options: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose'],
      description: 'Override the default line height for the variant',
    },
    letterSpacing: {
      control: 'select',
      options: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest'],
      description: 'Override the default letter spacing for the variant',
    },
    as: {
      control: 'text',
      description: 'Override the HTML element used',
    },
    truncate: {
      control: 'boolean',
      description: 'Whether to truncate overflow text with an ellipsis',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply',
    },
    children: {
      control: 'text',
      description: 'The content to display',
    },
  },
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Headings: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="h5">Heading 5</Typography>
      <Typography variant="h6">Heading 6</Typography>
    </div>
  ),
};

export const Paragraph: Story = {
  render: () => (
    <div className="space-y-4 max-w-lg">
      <Typography variant="large">
        This is a large paragraph with a longer text. The quick brown fox jumps over the lazy dog. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
      <Typography variant="p">
        This is a standard paragraph with a longer text. The quick brown fox jumps over the lazy dog. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
      <Typography variant="small">
        This is a small paragraph with a longer text. The quick brown fox jumps over the lazy dog. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
    </div>
  ),
};

export const Caption: Story = {
  args: {
    variant: 'caption',
    children: 'This is a caption for an image or figure',
  },
};

export const Label: Story = {
  args: {
    variant: 'label',
    children: 'Form Field Label',
  },
};

export const CustomStyling: Story = {
  args: {
    variant: 'p',
    size: 'xl',
    weight: 'bold',
    lineHeight: 'tight',
    letterSpacing: 'wide',
    className: 'text-primary-600 italic',
    children: 'Custom styled text with various overrides',
  },
};

export const Truncated: Story = {
  args: {
    variant: 'p',
    truncate: true,
    className: 'max-w-[200px]',
    children: 'This is a very long text that should be truncated when it exceeds the container width',
  },
};

export const AsCustomElement: Story = {
  args: {
    variant: 'p',
    as: 'blockquote',
    className: 'italic border-l-4 border-primary-500 pl-4',
    children: 'This is rendered as a blockquote element instead of a paragraph',
  },
};