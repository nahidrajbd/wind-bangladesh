import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Home, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div className="footer-company">
                    <h3>Women in Democracy (WIND)</h3>
                    <p>
                        Working towards a more inclusive, democratic, and equitable society.
                        Empowering women to lead and shape the future of Bangladesh.
                    </p>
                    <div className="social-links">
                        <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                        <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                        <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                        <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
                    </div>
                </div>

                <div className="footer-links">
                    <h4>Organization</h4>
                    <ul>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/mission">Mission & Vision</Link></li>
                        <li><Link to="/programs">Our Programs</Link></li>
                        <li><Link to="/leadership">Leadership</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-links">
                    <h4>Resources</h4>
                    <ul>
                        <li><Link to="/events">Events</Link></li>
                        <li><Link to="/news">News</Link></li>
                        <li><Link to="/media">Media & Publications</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h4>Contact Us</h4>
                    <ul>
                        <li>
                            <div className="contact-icon"><Home size={16} /></div>
                            <span>House # XX, Road # XX, Dhanmondi, Dhaka-1209, Bangladesh</span>
                        </li>
                        <li>
                            <div className="contact-icon"><Mail size={16} /></div>
                            <span>info@wind-bd.org</span>
                        </li>
                        <li>
                            <div className="contact-icon"><Phone size={16} /></div>
                            <span>+880 1XXX XXXXXX</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Women in Democracy (WIND). All rights reserved.</p>
                <div className="legal-links">
                    <Link to="/privacy">Privacy Policy</Link>
                    <span>|</span>
                    <Link to="/terms">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
