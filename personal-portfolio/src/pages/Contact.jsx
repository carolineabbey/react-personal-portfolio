import React, { useState } from 'react';
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email format is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
    } else {
      alert("Message sent!");
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    }
  };
  return (
    <section>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="name">Name:</label><br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p style={{color: 'red'}}>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email">Email:</label><br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p style={{color: 'red'}}>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="message">Message:</label><br />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <p style={{color: 'red'}}>{errors.message}</p>}
        </div>
        <button type="submit">Send</button>
      </form>
      <hr />
      <p>Email: ca586273@ucf.edu</p>
      <p>
        <a href="https://www.linkedin.com/in/caroline-abbey-62a14a33a/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </p>
    </section>
  );
}