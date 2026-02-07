import React from 'react';
import './PageDefaults.css';

const About = () => {
    return (
        <div className="page-container">
            <div className="page-header">
                <div className="container">
                    <h1>About Us</h1>
                    <p>Learn about our history and our dedication to democracy.</p>
                </div>
            </div>

            <div className="container page-content">
                <section className="animate-fade-in">
                    <h2>Who We Are</h2>
                    <p>
                        Women in Democracy (WIND) is a non-profit organization based in Dhaka, Bangladesh,
                        committed to the empowerment of women and the strengthening of democratic institutions.
                        Founded in [Year], we have worked tirelessly to bridge the gap between policy and practice,
                        ensuring that women's voices are heard at every level of decision-making.
                    </p>

                    <h2>Our History</h2>
                    <p>
                        WIND started as a small grassroots initiative... [Placeholder for history text].
                        Over the years, we have grown into a national organization with a network of thousands of volunteers
                        and partners across the country.
                    </p>

                    <h2>Our Approach</h2>
                    <p>
                        We believe in a holistic approach to development. Our programs are designed not just to educate,
                        but to empower individuals to take action. From local community workshops to high-level policy advocacy,
                        WIND acts as a catalyst for positive change.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default About;
