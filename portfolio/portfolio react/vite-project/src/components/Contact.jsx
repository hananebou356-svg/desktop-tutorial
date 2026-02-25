import React, { useState } from 'react';
import { personalData } from '../data/personalData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // In a real app, you'd send the data to a server
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 3000);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <section id="contact" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center mb-5">
            <h2 className="display-5 fw-bold mb-4">Get In Touch</h2>
            <p className="lead">I'd love to hear from you. Send me a message and I'll respond as soon as possible.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <h5 className="card-title mb-4">Contact Information</h5>
                <div className="mb-3">
                  <i className="fas fa-envelope text-primary me-3"></i>
                  <span>{personalData.contact.email}</span>
                </div>
                <div className="mb-3">
                  <i className="fas fa-phone text-primary me-3"></i>
                  <span>{personalData.contact.phone}</span>
                </div>
                <div className="mb-4">
                  <i className="fas fa-map-marker-alt text-primary me-3"></i>
                  <span>{personalData.contact.location}</span>
                </div>
                <h6 className="mb-3">Follow Me</h6>
                <div className="d-flex gap-3">
                  <a href={personalData.social.github} target="_blank" rel="noopener noreferrer" className="text-dark fs-4 hover-scale">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href={personalData.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-dark fs-4 hover-scale">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href={personalData.social.twitter} target="_blank" rel="noopener noreferrer" className="text-dark fs-4 hover-scale">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <h5 className="card-title mb-4">Send Message</h5>
                {isSubmitted && (
                  <div className="alert alert-success" role="alert">
                    Thank you for your message! I'll get back to you soon.
                  </div>
                )}
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                      type="text"
                      className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                      className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message here..."
                    ></textarea>
                    {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                  </div>
                  <button type="submit" className="btn btn-primary w-100">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
