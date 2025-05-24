import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../components/Form/Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Design System/Form/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: { control: 'text' },
    error: { control: 'text' },
    hint: { control: 'text' },
    disabled: { control: 'boolean' },
    checked: { control: 'boolean' },
    defaultChecked: { control: 'boolean' },
    required: { control: 'boolean' },
    onCheckedChange: { action: 'checked changed' },
  },
  args: {
    label: 'Accept terms and conditions',
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const WithHint: Story = {
  args: {
    hint: 'You must accept the terms to continue',
  },
};

export const WithError: Story = {
  args: {
    error: 'You must accept the terms to continue',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
  },
};

export const Required: Story = {
  args: {
    required: true,
    label: 'Required field',
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col space-y-6">
      <Checkbox
        label="Default unchecked"
      />
      <Checkbox
        label="Default checked"
        defaultChecked
      />
      <Checkbox
        label="With hint"
        hint="This is a helpful hint message"
      />
      <Checkbox
        label="With error"
        error="This field is required"
      />
      <Checkbox
        label="Disabled unchecked"
        disabled
      />
      <Checkbox
        label="Disabled checked"
        disabled
        defaultChecked
      />
      <Checkbox
        label="Required checkbox"
        required
      />
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};