import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Github, Linkedin, Twitter, Instagram, Sparkles } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'kiran.chaudhary.cg@gmail.com',
      href: 'kiran.chaudhary.cg@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '9106003382',
      href: '9106003382'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Ahmedabad, Gujarat',
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/kiranchaudhary18', color: 'hover:text-gray-300' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/chaudharykiran16/', color: 'hover:text-blue-400' },
    { icon: Twitter, label: 'Twitter', href: 'https://x.com/dekaliya_kiran', color: 'hover:text-cyan-400' },
    // { icon: Instagram, label: 'Instagram', href: 'https://instagram.com', color: 'hover:text-pink-400' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);

    try {
      // Using FormSubmit.co - a free form backend service
      const response = await fetch('https://formsubmit.co/ajax/kiran.chaudhary.cg@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _captcha: 'false'
        })
      });

      const data = await response.json();
      
      if (data.success === 'true' || response.ok) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setIsSubmitting(false);
      alert('Failed to send message. Please try contacting directly at kiran.chaudhary.cg@gmail.com');
    }
  };

  return (
    <section id="contact" className="py-20 px-6 relative">
      {/* Section Divider */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="text-primary" size={40} />
          </div>
          <h2 className="text-5xl font-bold mb-4">
            <span className="gradient-text">Let's Work Together</span>
          </h2>
          <p className="text-textSecondary text-lg">Have a project in mind? Let's make it happen!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-right">
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-textPrimary mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-textPrimary font-medium mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-cardBg border ${
                      errors.name ? 'border-red-500' : 'border-primary/20'
                    } rounded-lg text-textPrimary focus:outline-none focus:border-primary transition-colors`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-textPrimary font-medium mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-cardBg border ${
                      errors.email ? 'border-red-500' : 'border-primary/20'
                    } rounded-lg text-textPrimary focus:outline-none focus:border-primary transition-colors`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="subject" className="block text-textPrimary font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-cardBg border ${
                      errors.subject ? 'border-red-500' : 'border-primary/20'
                    } rounded-lg text-textPrimary focus:outline-none focus:border-primary transition-colors`}
                    placeholder="Project Inquiry"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                  )}
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-textPrimary font-medium mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className={`w-full px-4 py-3 bg-cardBg border ${
                      errors.message ? 'border-red-500' : 'border-primary/20'
                    } rounded-lg text-textPrimary focus:outline-none focus:border-primary transition-colors resize-none`}
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-ripple w-full py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold shadow-lg hover:shadow-primary/50 transition-all flex items-center justify-center gap-2 ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:scale-105'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>

                {/* Success Message */}
                {isSubmitted && (
                  <div className="flex items-center gap-3 p-4 bg-green-500/20 border border-green-500/50 rounded-lg animate-slide-down">
                    <CheckCircle className="text-green-500" size={24} />
                    <p className="text-green-500 font-medium">
                      Message sent successfully! I'll get back to you soon.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="animate-slide-left space-y-8">
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-textPrimary mb-6">Let's Connect</h3>
              
              <p className="text-textSecondary mb-8 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
                Feel free to reach out through any of the channels below.
              </p>

              {/* Contact Details */}
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center gap-4 p-4 bg-cardBg rounded-lg hover:bg-primary/10 transition-colors group"
                    >
                      <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg group-hover:scale-110 transition-transform">
                        <Icon className="text-primary" size={24} />
                      </div>
                      <div>
                        <p className="text-textSecondary text-sm">{info.label}</p>
                        <p className="text-textPrimary font-semibold">{info.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Social Media */}
              <div className="border-t border-primary/20 pt-8">
                <h4 className="text-lg font-bold text-textPrimary mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-4 glass rounded-lg ${social.color} transition-all hover:scale-110 card-hover`}
                        aria-label={social.label}
                      >
                        <Icon size={24} />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Availability Badge */}
              {/* <div className="mt-8 p-4 bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-500/30 rounded-lg"> */}
                {/* <div className="flex items-center gap-3"> */}
                  {/* <div className="relative">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping" />
                  </div> */}
                  {/* <div>
                    <p className="text-textPrimary font-semibold">Available for work</p>
                    <p className="text-textSecondary text-sm">Open to exciting opportunities!</p>
                  </div> */}
                {/* </div> */}
              {/* </div> */}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-textSecondary">
            <p>Made with</p>
            <span className="text-red-500 animate-pulse text-xl">❤️</span>
            <p>by Kiran Dekaliya</p>
          </div>
          <p className="text-textSecondary text-sm mt-2">
            © 2025 All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
