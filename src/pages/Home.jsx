import React from 'react';
import { ArrowRight, Calendar, Users, Globe, BookOpen } from 'lucide-react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="container hero-content">
                    <h1>Empowering Women,<br />Strengthening Democracy</h1>
                    <p>
                        Women in Democracy (WIND) is dedicated to fostering leadership, civic rights,
                        and social awareness across Bangladesh.
                    </p>
                    <div className="hero-actions">
                        <Link to="/mission" className="btn btn-primary">Our Mission</Link>
                        <Link to="/programs" className="btn btn-secondary">Our Programs</Link>
                    </div>
                </div>
            </section>

            {/* Focus Areas */}
            <section className="section focus-areas">
                <div className="container">
                    <div className="section-header">
                        <h2>Our Focus Areas</h2>
                        <p>Driving change through dedicated pillars of action.</p>
                    </div>

                    <div className="card-grid">
                        <div className="card focus-card">
                            <div className="icon-wrapper">
                                <Globe size={32} />
                            </div>
                            <h3>Democracy Watch</h3>
                            <p>Monitoring and advocating for transparent democratic processes and institutions.</p>
                        </div>

                        <div className="card focus-card">
                            <div className="icon-wrapper">
                                <Users size={32} />
                            </div>
                            <h3>Women Leadership</h3>
                            <p>Training and mentoring the next generation of female leaders in politics and society.</p>
                        </div>

                        <div className="card focus-card">
                            <div className="icon-wrapper">
                                <BookOpen size={32} />
                            </div>
                            <h3>Civic Rights</h3>
                            <p>Educating citizens about their rights and responsibilities in a democratic state.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Upcoming Events */}
            <section className="section bg-soft events-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Upcoming Events</h2>
                        <Link to="/events" className="view-all">View All Events <ArrowRight size={16} /></Link>
                    </div>

                    <div className="card-grid">
                        <div className="card event-card">
                            <div className="event-date">
                                <span className="day">15</span>
                                <span className="month">MAR</span>
                            </div>
                            <div className="event-details">
                                <h3>National Conference on Women's Rights</h3>
                                <p>A gathering of activists, policymakers, and citizens to discuss the future of women's rights.</p>
                                <Link to="/events/1" className="card-link">Learn More</Link>
                            </div>
                        </div>

                        <div className="card event-card">
                            <div className="event-date">
                                <span className="day">22</span>
                                <span className="month">APR</span>
                            </div>
                            <div className="event-details">
                                <h3>Youth Leadership Workshop</h3>
                                <p>Interactive training session for young aspiring leaders in Dhaka.</p>
                                <Link to="/events/2" className="card-link">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recent News */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Latest News</h2>
                        <Link to="/news" className="view-all">Read All News <ArrowRight size={16} /></Link>
                    </div>

                    <div className="news-grid">
                        <article className="news-item">
                            <div className="news-image news-placeholder-1"></div>
                            <div className="news-content">
                                <span className="news-date">February 10, 2026</span>
                                <h3>WIND Launches New Initiative for Rural Women</h3>
                                <p>Bringing essential civic education to remote villages across the country.</p>
                                <Link to="/news/1" className="read-more">Read Full Story</Link>
                            </div>
                        </article>

                        <article className="news-item">
                            <div className="news-image news-placeholder-2"></div>
                            <div className="news-content">
                                <span className="news-date">January 25, 2026</span>
                                <h3>Annual Report 2025 Published</h3>
                                <p>Reflecting on a year of impactful programs and community engagement.</p>
                                <Link to="/news/2" className="read-more">Read Full Story</Link>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <h2>Join Us in Making a Difference</h2>
                    <p>Become a member, volunteer, or partner with us to strengthen democracy in Bangladesh.</p>
                    <div className="cta-buttons">
                        <Link to="/contact" className="btn btn-primary">Get Involved</Link>
                        <Link to="/about" className="btn btn-outline">Learn About Us</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
