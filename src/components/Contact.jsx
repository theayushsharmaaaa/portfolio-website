import React, { useState, useRef } from 'react';
import '../styles/Contact.css';
import emailjs from 'emailjs-com';

const ContactSimple = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState({ show: false, message: '' });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setError({ show: false, message: '' });
    
    // Replace these with your actual EmailJS credentials
    const serviceId = 'service_lzxlq9m';
    const templateId = 'template_jiv2za7';
    const userId = 'X76bAk3dMvkFhoJOh';

    // For testing - simulate successful form submission without actual EmailJS
    const testMode = false;

    
    if (testMode) {
      // Simulate form submission
      setTimeout(() => {
        setSending(false);
        setSent(true);
        
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Reset success message after some time
        setTimeout(() => {
          setSent(false);
        }, 5000);
      }, 1500);
    } else {
      // Actual EmailJS submission
      emailjs.sendForm(serviceId, templateId, form.current, userId)
        .then((result) => {
          console.log('Email sent successfully:', result.text);
          setSending(false);
          setSent(true);
          
          // Reset form after successful submission
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
          
          // Reset success message after some time
          setTimeout(() => {
            setSent(false);
          }, 5000);
        }, (error) => {
          console.error('Email send failed:', error.text);
          setSending(false);
          setError({
            show: true,
            message: 'Failed to send message. Please try again later.'
          });
          
          // Reset error message after some time
          setTimeout(() => {
            setError({ show: false, message: '' });
          }, 5000);
        });
    }
  };
  
  return (
    <section className="contact-section" id="contact">
      <div className="contact-wrapper">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-text">
          <h3>Let's talk about your project</h3>
          <p>Feel free to reach out if you want to collaborate with me, or simply have a chat.</p>
        </div>
        
        <div className="contact-form-wrapper">
          <form ref={form} onSubmit={handleSubmit}>
            <div className="form-row">
              <label htmlFor="name">Your Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
            </div>
            
            <div className="form-row">
              <label htmlFor="email">Your Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </div>
            
            <div className="form-row">
              <label htmlFor="subject">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject} 
                onChange={handleChange} 
                required 
              />
            </div>
            
            <div className="form-row">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                value={formData.message} 
                onChange={handleChange} 
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-button" disabled={sending}>
              {sending ? 'Sending...' : 'Send Message'}
            </button>
            
            {sent && (
              <div className="success-message">
                Thank you! Your message has been sent successfully.
              </div>
            )}
            
            {error.show && (
              <div className="error-message">
                {error.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSimple;