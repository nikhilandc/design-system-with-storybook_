import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { TextInput } from '../components/Form/TextInput';
import { SearchIcon, EyeIcon, EyeOffIcon } from 'lucide-react';

const meta: Meta<typeof TextInput> = {
  title: 'Design System/Form/TextInput',
  component: TextInput,
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
    fullWidth: { control: 'boolean' },
    isLoading: { control: 'boolean' },
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'tel', 'url'],
    },
  },
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
  },
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Default: Story = {};

export const WithHint: Story = {
  args: {
    hint: 'We\'ll never share your email with anyone else.',
  },
};

export const WithError: Story = {
  args: {
    error: 'Please enter a valid email address.',
    value: 'invalid-email',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: 'disabled@example.com',
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
    value: 'loading@example.com',
  },
};

export const WithLeadingIcon: Story = {
  args: {
    leadingIcon: <SearchIcon className="h-4 w-4" />,
    placeholder: 'Search...',
    label: 'Search',
  },
};

export const PasswordToggle: Story = {
  render: (args) => {
    const [showPassword, setShowPassword] = useState(false);
    
    return (
      <TextInput
        {...args}
        type={showPassword ? 'text' : 'password'}
        label="Password"
        placeholder="Enter your password"
        trailingIcon={
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-muted-foreground hover:text-foreground"
          >
            {showPassword ? (
              <EyeOffIcon className="h-4 w-4" />
            ) : (
              <EyeIcon className="h-4 w-4" />
            )}
          </button>
        }
      />
    );
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col space-y-6">
      <TextInput 
        label="Default"
        placeholder="Default input"
      />
      <TextInput 
        label="With value"
        value="Input with value"
      />
      <TextInput 
        label="With hint"
        placeholder="Input with hint"
        hint="This is a helpful hint"
      />
      <TextInput 
        label="With error"
        value="Invalid input"
        error="This field has an error"
      />
      <TextInput 
        label="Disabled"
        placeholder="Disabled input"
        disabled
      />
      <TextInput 
        label="Loading"
        value="Loading..."
        isLoading
      />
      <TextInput 
        label="With leading icon"
        placeholder="Search..."
        leadingIcon={<SearchIcon className="h-4 w-4" />}
      />
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};