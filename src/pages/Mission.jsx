import React from 'react';
import './PageDefaults.css';
import './Mission.css';
import { Target, Flag } from 'lucide-react';

const Mission = () => {
    return (
        <div className="page-container">
            <div className="page-header">
                <div className="container">
                    <h1>Mission & Vision</h1>
                    <p>Our guiding principles and long-term goals.</p>
                </div>
            </div>

            <div className="container page-content">
                <div className="mission-content">
                    <section className="mission-section">
                        <h2><Target size={32} /> Our Mission</h2>
                        <p>
                            WIND is dedicated to empowering women to become equal partners in the democratic process.
                            Our mission is to advocate for policies and practices that promote gender equality, civic rights,
                            and women's leadership in all sectors of society.
                        </p>
                    </section>

                    <section className="vision-section">
                        <h2><Flag size={32} /> Our Vision</h2>
                        <p>
                            We envision a Bangladesh where women are fully empowered, their voices are amplified,
                            and they play a central role in shaping a democratic, just, and inclusive society.
                        </p>
                    </section>

                    <section className="values-section">
                        <h2>Our Core Values</h2>
                        <ul>
                            <li><strong>Integrity:</strong> Upholding the highest standards of honesty and transparency.</li>
                            <li><strong>Equality:</strong> Ensuring equal opportunities and rights for all.</li>
                            <li><strong>Empowerment:</strong> Building capacity and confidence in women to lead.</li>
                            <li><strong>Collaboration:</strong> Working together with partners and communities for greater impact.</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Mission;
