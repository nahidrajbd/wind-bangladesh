import React, { useState } from 'react';
import './PageDefaults.css';
import './Contact.css';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
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
        alert('Thank you for contacting us! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="page-container">
            <div className="page-header">
                <div className="container">
                    <h1>Contact Us</h1>
                    <p>We'd love to hear from you. Get in touch with us.</p>
                </div>
            </div>

            <div className="container page-content">
                <div className="contact-grid">
                    <div className="contact-info">
                        <h2>Get in Touch</h2>
                        <p>
                            Whether you want to join our team, partner with us, or just learn more about our work,
                            we are here to answer your questions.
                        </p>

                        <div className="contact-detail">
                            <div className="icon"><MapPin /></div>
                            <div>
                                <h3>Address</h3>
                                <p>House # 12, Road # 5, Dhanmondi, Dhaka-1209, Bangladesh</p>
                            </div>
                        </div>

                        <div className="contact-detail">
                            <div className="icon"><Mail /></div>
                            <div>
                                <h3>Email</h3>
                                <a href="mailto:info@wind-bd.org">info@wind-bd.org</a>
                            </div>
                        </div>

                        <div className="contact-detail">
                            <div className="icon"><Phone /></div>
                            <div>
                                <h3>Phone</h3>
                                <a href="tel:+8801700000000">+880 17 0000 0000</a>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-wrapper">
                        <h2>Send a Message</h2>
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
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

                            <button type="submit" className="btn btn-primary">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
