import React from 'react';
import './PageDefaults.css';
import './Home.css';

const Events = () => {
    return (
        <div className="page-container">
            <div className="page-header">
                <div className="container">
                    <h1>Upcoming & Past Events</h1>
                    <p>Join us in our activities and community engagements.</p>
                </div>
            </div>

            <div className="container page-content">
                <div className="card-grid">
                    <div className="card event-card">
                        <div className="event-date">
                            <span className="day">15</span>
                            <span className="month">MAR</span>
                        </div>
                        <div className="event-details">
                            <h3>National Conference on Women's Rights 2024</h3>
                            <p>Dhaka, Bangladesh</p>
                            <p>Bringing together stakeholders from across the country to discuss progress and challenges in achieving gender equality.</p>
                            <button className="btn btn-secondary btn-sm">Learn More</button>
                        </div>
                    </div>

                    <div className="card event-card">
                        <div className="event-date">
                            <span className="day">22</span>
                            <span className="month">APR</span>
                        </div>
                        <div className="event-details">
                            <h3>Youth Leadership Workshop</h3>
                            <p>Chittagong, Bangladesh</p>
                            <p>A hands-on workshop focused on developing leadership skills in young activists.</p>
                            <button className="btn btn-secondary btn-sm">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;
