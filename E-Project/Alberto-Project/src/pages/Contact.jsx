import { useState } from 'react';
import '../styles/Contact.css';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you! Your message has been sent. We'll get back to you within 24 hours.");
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        });
    };

    function focusUp(e) {
        e.target.previousElementSibling?.classList.add('focus-span');
    }

    function focusDown(e) {
        if (e.target.value === '') {
            e.target.previousElementSibling?.classList.remove('focus-span');
        }
    }

    const contactMethods = [
        {
            icon: '📍',
            title: 'Visit Us',
            info: '123 Luxury Ave, New York, NY 10001',
            action: 'Get Directions'
        },
        {
            icon: '📞',
            title: 'Call Us',
            info: '+1 (555) 123-4567',
            action: 'Call Now',
            link: 'tel:+15551234567'
        },
        {
            icon: '✉️',
            title: 'Email Us',
            info: 'info@albertowatches.com',
            action: 'Send Email',
            link: 'mailto:info@albertowatches.com'
        },
        {
            icon: '🕐',
            title: 'Business Hours',
            info: 'Mon–Sat: 10AM–8PM | Sun: 12PM–6PM',
            action: null
        }
    ];

    return (
        <div className="contact-page">
            <div className="contact-container">
                <div className="contact-header">
                    <h1 className="contact-title">Get in Touch</h1>
                    <p className="contact-intro">
                        Have a question or want to learn more about our collection?
                        We're here to help. Reach out to us through any of the methods below.
                    </p>
                </div>

                <div className="contact-methods-grid">
                    {contactMethods.map((method, index) => (
                        <div key={index} className="contact-method-card">
                            <div className="method-icon">{method.icon}</div>
                            <h3>{method.title}</h3>
                            <p>{method.info}</p>
                            {method.link && (
                                <a href={method.link} className="method-action">
                                    {method.action}
                                </a>
                            )}
                        </div>
                    ))}
                </div>

                <div className="contact-content">
                    <div className="contact-form-section">
                        <div className="form-header">
                            <h2>Send us a Message</h2>
                            <p>Fill out the form below and we'll respond as soon as possible.</p>
                        </div>
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <span>Your Name</span>
                                <input
                                    onFocus={focusUp}
                                    onBlur={focusDown}
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                />
                            </div>
                            <div className="form-group">
                                <span>Email Address</span>
                                <input
                                    onFocus={focusUp}
                                    onBlur={focusDown}
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                />
                            </div>
                            <div className="form-group">
                                <span>Phone Number (Optional)</span>
                                <input
                                    onFocus={focusUp}
                                    onBlur={focusDown}
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="form-input"
                                />
                            </div>
                            <div className="form-group">
                                <span>Subject</span>
                                <input
                                    onFocus={focusUp}
                                    onBlur={focusDown}
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                />
                            </div>
                            <div className="form-group">
                                <p>Your Message</p>
                                <textarea
                                    onFocus={focusUp}
                                    onBlur={focusDown}
                                    name="message"
                                    rows="6"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="form-textarea"
                                ></textarea>
                            </div>
                            <button type="submit" className="form-submit-btn">
                                Send Message
                            </button>
                        </form>
                    </div>

                    <div className="contact-info-section">
                        <div className="info-header">
                            <h2>Contact Information</h2>
                            <p>We're available to assist you with any inquiries.</p>
                        </div>

                        <div className="info-details">
                            <div className="info-detail-item">
                                <span className="detail-icon">📍</span>
                                <div>
                                    <strong>Address</strong>
                                    <p>123 Luxury Ave<br />New York, NY 10001<br />United States</p>
                                </div>
                            </div>

                            <div className="info-detail-item">
                                <span className="detail-icon">📞</span>
                                <div>
                                    <strong>Phone</strong>
                                    <p><a href="tel:+15551234567">+1 (555) 123-4567</a></p>
                                    <p className="detail-note">Available during business hours</p>
                                </div>
                            </div>

                            <div className="info-detail-item">
                                <span className="detail-icon">✉️</span>
                                <div>
                                    <strong>Email</strong>
                                    <p><a href="mailto:info@albertowatches.com">info@albertowatches.com</a></p>
                                    <p className="detail-note">We respond within 24 hours</p>
                                </div>
                            </div>

                            <div className="info-detail-item">
                                <span className="detail-icon">🕐</span>
                                <div>
                                    <strong>Business Hours</strong>
                                    <p>Monday–Saturday: 10AM–8PM<br />Sunday: 12PM–6PM</p>
                                </div>
                            </div>
                        </div>

                        <div className="map-placeholder">
                            <div className="map-content">
                                <span className="map-icon">🗺️</span>
                                <p>Interactive Map</p>
                                <p className="map-subtitle">Google Maps Integration Coming Soon</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
