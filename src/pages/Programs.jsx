import React from 'react';
import './PageDefaults.css';
import './Home.css'; // borrowing card styles

const Programs = () => {
    return (
        <div className="page-container">
            <div className="page-header">
                <div className="container">
                    <h1>Our Programs</h1>
                    <p>Key initiatives that drive our mission forward.</p>
                </div>
            </div>

            <div className="container page-content">
                <div className="card-grid">
                    <div className="card focus-card">
                        <h3>Democracy Watch</h3>
                        <p>Monitoring elections, parliamentary sessions, and local government activities to ensure transparency and accountability.</p>
                    </div>

                    <div className="card focus-card">
                        <h3>Women's Leadership Academy</h3>
                        <p>Training and mentorship programs designed for women aspiring to enter politics or leadership positions in their communities.</p>
                    </div>

                    <div className="card focus-card">
                        <h3>Civic Rights Education</h3>
                        <p>Workshops and seminars in both rural and urban areas to educate citizens about their constitutional rights and civic responsibilities.</p>
                    </div>

                    <div className="card focus-card">
                        <h3>Policy Advocacy</h3>
                        <p>Engaging with policymakers to advocate for gender-sensitive legislation and reforms that benefit women and marginalized groups.</p>
                    </div>

                    <div className="card focus-card">
                        <h3>Young Women Leaders Network</h3>
                        <p>Connecting young women leaders across Bangladesh to share resources, experiences, and build a strong support network.</p>
                    </div>

                    <div className="card focus-card">
                        <h3>Legal Aid Support</h3>
                        <p>Providing legal assistance and guidance to women facing discrimination or violations of their civic rights.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Programs;
