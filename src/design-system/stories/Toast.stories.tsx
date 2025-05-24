import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Toast } from '../components/Feedback/Toast';

const meta: Meta<typeof Toast> = {
  title: 'Design System/Feedback/Toast',
  component: Toast,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'success', 'error', 'warning', 'info'],
    },
    title: { control: 'text' },
    description: { control: 'text' },
    open: { control: 'boolean' },
    duration: { control: 'number' },
    onClose: { action: 'closed' },
  },
  args: {
    title: 'Toast Title',
    description: 'This is a toast notification message.',
    open: true,
    duration: 5000,
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {};

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Success!',
    description: 'Your changes have been saved successfully.',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    title: 'Error',
    description: 'There was a problem processing your request.',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Warning',
    description: 'Your session will expire in 5 minutes.',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    title: 'Information',
    description: 'A new version is available. Please update.',
  },
};

export const WithAction: Story = {
  args: {
    title: 'Update Available',
    description: 'A new version is available for download.',
    action: (
      <button
        className="px-3 py-1.5 text-sm bg-transparent hover:bg-background/10 rounded-md transition-colors"
      >
        Update
      </button>
    ),
  },
};

export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    
    return (
      <div className="flex flex-col space-y-4">
        <button
          onClick={() => setOpen(true)}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
        >
          Show Toast
        </button>
        <Toast
          title="Controlled Toast"
          description="This toast is controlled by state."
          open={open}
          onClose={() => setOpen(false)}
        />
      </div>
    );
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col space-y-4 w-96">
      <Toast
        variant="default"
        title="Default Toast"
        description="This is a default toast notification."
      />
      <Toast
        variant="success"
        title="Success Toast"
        description="Your action was completed successfully."
      />
      <Toast
        variant="error"
        title="Error Toast"
        description="There was an error processing your request."
      />
      <Toast
        variant="warning"
        title="Warning Toast"
        description="Please be aware of this important notice."
      />
      <Toast
        variant="info"
        title="Info Toast"
        description="Here's some information you might find useful."
      />
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};