import React from 'react';
import './PageDefaults.css';
import './Home.css';
import './Team.css';
import { User } from 'lucide-react';

const Team = () => {
    return (
        <div className="page-container">
            <div className="page-header">
                <div className="container">
                    <h1>Leadership & Team</h1>
                    <p>The dedicated individuals driving our mission.</p>
                </div>
            </div>

            <div className="container page-content">
                <section className="team-section">
                    <h2>Board of Directors</h2>
                    <div className="card-grid">
                        <div className="card team-card">
                            <div className="team-avatar"><User size={48} /></div>
                            <h3>Dr. Shireen Akhter</h3>
                            <p className="team-role">Chairperson</p>
                            <p>An esteemed academic and social activist with over 20 years of experience
                                in women's rights and education.</p>
                        </div>

                        <div className="card team-card">
                            <div className="team-avatar"><User size={48} /></div>
                            <h3>Ms. Farida Yasmin</h3>
                            <p className="team-role">Executive Director</p>
                            <p>Leading the day-to-day operations and strategic direction of WIND with
                                a passion for community development.</p>
                        </div>

                        <div className="card team-card">
                            <div className="team-avatar"><User size={48} /></div>
                            <h3>Advocate Nasreen Jahan</h3>
                            <p className="team-role">Legal Director</p>
                            <p>Ensuring legal support and advocacy for women's rights and justice.</p>
                        </div>
                    </div>
                </section>

                <section className="team-section team-list">
                    <h2>Our Team</h2>
                    <ul>
                        <li><strong>Program Manager:</strong> Humayra Kabir</li>
                        <li><strong>Communications Officer:</strong> Nusrat Jahan</li>
                        <li><strong>Research Associate:</strong> Tanvir Ahmed</li>
                        <li><strong>Field Coordinator:</strong> Salma Begum</li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default Team;
