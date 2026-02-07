import React from 'react';
import './PageDefaults.css';
import './Gallery.css';
import { Image } from 'lucide-react';

const Gallery = () => {
    return (
        <div className="page-container">
            <div className="page-header">
                <div className="container">
                    <h1>Photo Gallery</h1>
                    <p>Capturing moments of our impact and engagement.</p>
                </div>
            </div>

            <div className="container page-content">
                <div className="gallery-grid">
                    <div className="gallery-item">
                        <div className="placeholder-image"><Image size={64} opacity={0.5} /></div>
                        <p className="caption">Women Leadership Workshop 2024</p>
                    </div>

                    <div className="gallery-item">
                        <div className="placeholder-image"><Image size={64} opacity={0.5} /></div>
                        <p className="caption">Community Roundtable</p>
                    </div>

                    <div className="gallery-item">
                        <div className="placeholder-image"><Image size={64} opacity={0.5} /></div>
                        <p className="caption">Annual General Meeting</p>
                    </div>

                    <div className="gallery-item">
                        <div className="placeholder-image"><Image size={64} opacity={0.5} /></div>
                        <p className="caption">Field Visit to rural areas</p>
                    </div>

                    <div className="gallery-item">
                        <div className="placeholder-image"><Image size={64} opacity={0.5} /></div>
                        <p className="caption">Press Conference</p>
                    </div>

                    <div className="gallery-item">
                        <div className="placeholder-image"><Image size={64} opacity={0.5} /></div>
                        <p className="caption">International Conference</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
