import { useState } from 'react';
import { Typography, TextInput, Checkbox, Toast, Modal } from './design-system/components';
import { MoonIcon, SunIcon } from 'lucide-react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    agreeToTerms: false
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    agreeToTerms: ''
  });

  // Toggle between light and dark mode
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === 'checkbox' ? checked : value
    });
    
    // Clear error when user starts typing
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };

  // Validate form and show toast if valid
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = {
      name: !formValues.name ? 'Name is required' : '',
      email: !formValues.email ? 'Email is required' : 
        !/\S+@\S+\.\S+/.test(formValues.email) ? 'Email is invalid' : '',
      agreeToTerms: !formValues.agreeToTerms ? 'You must agree to the terms' : ''
    };
    
    setFormErrors(errors);
    
    if (!errors.name && !errors.email && !errors.agreeToTerms) {
      setModalOpen(false);
      setShowToast(true);
    }
  };

  return (
    <div className={`min-h-screen w-full p-6 ${darkMode ? 'dark' : ''}`}>
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-center mb-12">
          <Typography variant="h2" className="text-primary-700 dark:text-primary-300">
            Design System
          </Typography>
          
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <SunIcon size={20} /> : <MoonIcon size={20} />}
          </button>
        </header>
        
        <main className="space-y-12">
          {/* Typography Section */}
          <section className="space-y-6">
            <Typography variant="h3">Typography</Typography>
            
            <div className="grid gap-4 p-6 bg-card rounded-lg shadow-sm">
              <Typography variant="h1">Heading 1</Typography>
              <Typography variant="h2">Heading 2</Typography>
              <Typography variant="h3">Heading 3</Typography>
              <Typography variant="h4">Heading 4</Typography>
              <Typography variant="h5">Heading 5</Typography>
              <Typography variant="h6">Heading 6</Typography>
              <Typography variant="large">Large paragraph text for important content.</Typography>
              <Typography variant="p">Standard paragraph text for regular content.</Typography>
              <Typography variant="small">Small text for secondary information.</Typography>
              <Typography variant="caption">Caption text for images or supplementary content.</Typography>
              <Typography variant="label">Label text for form fields.</Typography>
            </div>
          </section>
          
          {/* Form Elements Section */}
          <section className="space-y-6">
            <Typography variant="h3">Form Components</Typography>
            
            <div className="grid gap-8 p-6 bg-card rounded-lg shadow-sm">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <Typography variant="h5" className="mb-4">Text Input</Typography>
                  <div className="space-y-4">
                    <TextInput 
                      label="Default Input" 
                      placeholder="Enter text here" 
                    />
                    <TextInput 
                      label="With Value" 
                      value="Input with text" 
                    />
                    <TextInput 
                      label="With Hint" 
                      placeholder="Enter your email" 
                      hint="We'll never share your email with anyone else."
                    />
                    <TextInput 
                      label="With Error" 
                      value="invalid-email" 
                      error="Please enter a valid email address"
                    />
                    <TextInput 
                      label="Disabled" 
                      placeholder="This field is disabled" 
                      disabled
                    />
                  </div>
                </div>
                
                <div>
                  <Typography variant="h5" className="mb-4">Checkbox</Typography>
                  <div className="space-y-4">
                    <Checkbox 
                      label="Default checkbox" 
                    />
                    <Checkbox 
                      label="Checked checkbox" 
                      defaultChecked
                    />
                    <Checkbox 
                      label="With hint" 
                      hint="Additional information about this checkbox"
                    />
                    <Checkbox 
                      label="With error" 
                      error="This field is required"
                    />
                    <Checkbox 
                      label="Disabled checkbox" 
                      disabled
                    />
                    <Checkbox 
                      label="Disabled and checked" 
                      disabled 
                      defaultChecked
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Feedback Components Section */}
          <section className="space-y-6">
            <Typography variant="h3">Feedback Components</Typography>
            
            <div className="grid gap-8 p-6 bg-card rounded-lg shadow-sm">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <Typography variant="h5" className="mb-4">Toast Messages</Typography>
                  <div className="space-y-4">
                    <button
                      onClick={() => setShowToast(true)}
                      className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                    >
                      Show Toast
                    </button>
                    
                    <div className="w-full space-y-2">
                      <Typography variant="small">Preview:</Typography>
                      <Toast 
                        variant="success"
                        title="Success"
                        description="Your changes have been saved successfully."
                        open={true}
                        duration={Infinity}
                      />
                      <Toast 
                        variant="error"
                        title="Error"
                        description="There was a problem processing your request."
                        open={true}
                        duration={Infinity}
                      />
                      <Toast 
                        variant="warning"
                        title="Warning"
                        description="Your session will expire in 5 minutes."
                        open={true}
                        duration={Infinity}
                      />
                      <Toast 
                        variant="info"
                        title="Information"
                        description="A new version is available for download."
                        open={true}
                        duration={Infinity}
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <Typography variant="h5" className="mb-4">Modal Dialog</Typography>
                  <div className="space-y-4">
                    <button
                      onClick={() => setModalOpen(true)}
                      className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                    >
                      Open Modal
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      
      {/* Toast notification */}
      <div className="fixed bottom-4 right-4 max-w-md">
        <Toast
          variant="success"
          title="Success!"
          description="Form submitted successfully."
          open={showToast}
          onClose={() => setShowToast(false)}
        />
      </div>
      
      {/* Modal */}
      <Modal
        title="Contact Form"
        description="Please fill out the form below to get in touch with us."
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <TextInput
            label="Name"
            name="name"
            placeholder="Enter your name"
            value={formValues.name}
            onChange={handleInputChange}
            error={formErrors.name}
          />
          
          <TextInput
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formValues.email}
            onChange={handleInputChange}
            error={formErrors.email}
          />
          
          <Checkbox
            label="I agree to the terms and conditions"
            name="agreeToTerms"
            checked={formValues.agreeToTerms}
            onChange={handleInputChange}
            error={formErrors.agreeToTerms}
          />
          
          <div className="flex justify-end space-x-2 pt-4">
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default App;