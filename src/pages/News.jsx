import React from 'react';
import './PageDefaults.css';
import './Home.css';

const News = () => {
    return (
        <div className="page-container">
            <div className="page-header">
                <div className="container">
                    <h1>News & Updates</h1>
                    <p>Stay informed about our latest activities and announcements.</p>
                </div>
            </div>

            <div className="container page-content">
                <div className="news-list">
                    <article className="news-item">
                        <div className="news-image news-placeholder-1"></div>
                        <div className="news-content">
                            <span className="news-date">February 15, 2026</span>
                            <h3>WIND Celebrates International Women's Day</h3>
                            <p>Joining the global community to advocate for gender parity.</p>
                            <a href="#" className="read-more">Read Full Story</a>
                        </div>
                    </article>

                    <article className="news-item">
                        <div className="news-image news-placeholder-2"></div>
                        <div className="news-content">
                            <span className="news-date">January 20, 2026</span>
                            <h3>New Partnership with UN Women</h3>
                            <p>Collaborating to enhance women's political participation in rural areas.</p>
                            <a href="#" className="read-more">Read Full Story</a>
                        </div>
                    </article>

                    <article className="news-item">
                        <div className="news-image news-placeholder-1"></div>
                        <div className="news-content">
                            <span className="news-date">December 10, 2025</span>
                            <h3>Human Rights Day Observance</h3>
                            <p>Reflecting on the progress made and the challenges that remain.</p>
                            <a href="#" className="read-more">Read Full Story</a>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default News;
