import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Modal } from '../components/Feedback/Modal';
import { TextInput } from '../components/Form/TextInput';
import { Typography } from '../components/Typography';

const meta: Meta<typeof Modal> = {
  title: 'Design System/Feedback/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    open: { control: 'boolean' },
    onClose: { action: 'closed' },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'full'],
    },
    hideCloseButton: { control: 'boolean' },
  },
  args: {
    title: 'Modal Title',
    description: 'This is a modal dialog.',
    open: true,
    size: 'md',
    hideCloseButton: false,
    children: <div>Modal Content</div>,
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {};

export const WithoutHeader: Story = {
  args: {
    title: undefined,
    description: undefined,
    children: (
      <div className="text-center">
        <Typography variant="h4" className="mb-4">Custom Modal Content</Typography>
        <Typography variant="p" className="mb-6">This modal doesn't use the built-in header and has its own styling.</Typography>
        <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
          Confirm
        </button>
      </div>
    ),
  },
};

export const ConfirmationDialog: Story = {
  args: {
    title: 'Delete Item',
    description: 'Are you sure you want to delete this item? This action cannot be undone.',
    children: (
      <div className="flex justify-end space-x-2 mt-6">
        <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors">
          Cancel
        </button>
        <button className="px-4 py-2 bg-destructive text-destructive-foreground rounded-md hover:bg-destructive/90 transition-colors">
          Delete
        </button>
      </div>
    ),
  },
};

export const FormInModal: Story = {
  args: {
    title: 'Edit Profile',
    description: 'Update your profile information.',
    size: 'lg',
    children: (
      <div className="space-y-4">
        <TextInput label="Name" defaultValue="John Doe" />
        <TextInput label="Email" defaultValue="john@example.com" />
        <div className="flex justify-end space-x-2 mt-6">
          <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors">
            Cancel
          </button>
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
            Save Changes
          </button>
        </div>
      </div>
    ),
  },
};

export const DifferentSizes: Story = {
  render: () => {
    const [size, setSize] = useState<'sm' | 'md' | 'lg' | 'xl' | 'full'>('md');
    const [open, setOpen] = useState(false);
    
    return (
      <div className="flex flex-col space-y-4">
        <div className="flex flex-wrap gap-2">
          {['sm', 'md', 'lg', 'xl', 'full'].map((s) => (
            <button
              key={s}
              onClick={() => { setSize(s as typeof size); setOpen(true); }}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>
        
        <Modal
          title={`${size.toUpperCase()} Modal`}
          description={`This is a ${size} sized modal dialog.`}
          open={open}
          onClose={() => setOpen(false)}
          size={size}
        >
          <div className="py-4">
            <Typography variant="p">
              Modal content goes here. This modal is showing the {size} size variant.
            </Typography>
          </div>
          <div className="flex justify-end">
            <button
              onClick={() => setOpen(false)}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Close
            </button>
          </div>
        </Modal>
      </div>
    );
  },
};

export const NestedModals: Story = {
  render: () => {
    const [primaryOpen, setPrimaryOpen] = useState(false);
    const [secondaryOpen, setSecondaryOpen] = useState(false);
    
    return (
      <div>
        <button
          onClick={() => setPrimaryOpen(true)}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
        >
          Open First Modal
        </button>
        
        <Modal
          title="Primary Modal"
          open={primaryOpen}
          onClose={() => setPrimaryOpen(false)}
        >
          <div className="space-y-4">
            <Typography variant="p">This is the primary modal.</Typography>
            <button
              onClick={() => setSecondaryOpen(true)}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Open Nested Modal
            </button>
          </div>
          
          <Modal
            title="Secondary Modal"
            description="This is a nested modal dialog."
            open={secondaryOpen}
            onClose={() => setSecondaryOpen(false)}
            size="sm"
          >
            <div className="space-y-4">
              <Typography variant="p">This is a nested modal.</Typography>
              <div className="flex justify-end">
                <button
                  onClick={() => setSecondaryOpen(false)}
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </Modal>
        </Modal>
      </div>
    );
  },
};