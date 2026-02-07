import React from 'react';
import './PageDefaults.css';
import './Media.css';
import { FileText, Mic, Video } from 'lucide-react';

const Media = () => {
    return (
        <div className="page-container">
            <div className="page-header">
                <div className="container">
                    <h1>Media & Publications</h1>
                    <p>Research, reports, and press coverage of our work.</p>
                </div>
            </div>

            <div className="container page-content">
                <div className="media-grid">
                    <section className="media-section">
                        <h2><FileText size={20} /> Latest Reports</h2>
                        <ul className="media-list">
                            <li><a href="#">Annual Report 2025</a></li>
                            <li><a href="#">Status of Women in Democracy - Research Paper</a></li>
                            <li><a href="#">Policy Brief: Women's Leadership in Local Government</a></li>
                        </ul>
                    </section>

                    <section className="media-section">
                        <h2><Mic size={20} /> Press Releases</h2>
                        <ul className="media-list">
                            <li><a href="#">WIND Condemns Violence Against Women Activists</a></li>
                            <li><a href="#">Celebrating International Women's Day with WIND</a></li>
                        </ul>
                    </section>

                    <section className="media-section">
                        <h2><Video size={20} /> Videos</h2>
                        <p>Watch recordings of our recent webinars and interviews on our <a href="#">YouTube Channel</a>.</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Media;
