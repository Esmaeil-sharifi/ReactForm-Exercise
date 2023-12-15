import React, { useState, useEffect } from 'react';
import './Form.css'; // Import a CSS file for styling (replace with your own styles)

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    age: '',
    email: '',
  });

  useEffect(() => {
    validateForm();
  }, [formData]);

  const validateForm = () => {
    const nameRegex = /^[a-zA-Z\s]+$/;
    const ageRegex = /^[1-9][0-9]*$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let nameError = '';
    let ageError = '';
    let emailError = '';

    if (!formData.name.trim()) {
      nameError = 'Name is required';
    } else if (!nameRegex.test(formData.name)) {
      nameError = 'Invalid name format';
    }

    if (!formData.age.trim()) {
      ageError = 'Age is required';
    } else if (!ageRegex.test(formData.age)) {
      ageError = 'Invalid age format';
    }

    if (formData.email.trim() && !emailRegex.test(formData.email)) {
      emailError = 'Invalid email format';
    }

    setErrors({
      name: nameError,
      age: ageError,
      email: emailError,
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();

    // Add additional logic here for form submission, if needed
    if (!errors.name && !errors.age && !errors.email) {
      // Form is valid, you can proceed with submission
      console.log('Form submitted:', formData);
    } else {
      console.log('Form has errors. Please fix them.');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <span className="error-message">{errors.name}</span>
        </div>

        <div className="form-field">
          <label htmlFor="age">Age:</label>
          <input
            type="text"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
          <span className="error-message">{errors.age}</span>
        </div>

        <div className="form-field">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <span className="error-message">{errors.email}</span>
        </div>

        <div className="form-field">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
