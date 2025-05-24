import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '../components/Form/Select';

const meta: Meta<typeof Select> = {
  title: 'Design System/Form/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: { control: 'text' },
    error: { control: 'text' },
    hint: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    value: { control: 'text' },
    onValueChange: { action: 'value changed' },
  },
  args: {
    label: 'Select an option',
    options: [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana' },
      { value: 'orange', label: 'Orange' },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {};

export const WithValue: Story = {
  args: {
    value: 'banana',
  },
};

export const WithHint: Story = {
  args: {
    hint: 'Choose your favorite fruit',
  },
};

export const WithError: Story = {
  args: {
    error: 'Please select an option',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Required: Story = {
  args: {
    required: true,
    label: 'Required field',
  },
};

export const CustomPlaceholder: Story = {
  args: {
    placeholder: 'Choose a fruit...',
  },
};

export const LongList: Story = {
  args: {
    options: Array.from({ length: 20 }, (_, i) => ({
      value: `option-${i + 1}`,
      label: `Option ${i + 1}`,
    })),
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col space-y-6">
      <Select
        label="Default"
        options={[
          { value: 'apple', label: 'Apple' },
          { value: 'banana', label: 'Banana' },
          { value: 'orange', label: 'Orange' },
        ]}
      />
      <Select
        label="With value"
        value="banana"
        options={[
          { value: 'apple', label: 'Apple' },
          { value: 'banana', label: 'Banana' },
          { value: 'orange', label: 'Orange' },
        ]}
      />
      <Select
        label="With hint"
        hint="Choose your favorite fruit"
        options={[
          { value: 'apple', label: 'Apple' },
          { value: 'banana', label: 'Banana' },
          { value: 'orange', label: 'Orange' },
        ]}
      />
      <Select
        label="With error"
        error="Please select an option"
        options={[
          { value: 'apple', label: 'Apple' },
          { value: 'banana', label: 'Banana' },
          { value: 'orange', label: 'Orange' },
        ]}
      />
      <Select
        label="Disabled"
        disabled
        options={[
          { value: 'apple', label: 'Apple' },
          { value: 'banana', label: 'Banana' },
          { value: 'orange', label: 'Orange' },
        ]}
      />
      <Select
        label="Required"
        required
        options={[
          { value: 'apple', label: 'Apple' },
          { value: 'banana', label: 'Banana' },
          { value: 'orange', label: 'Orange' },
        ]}
      />
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};