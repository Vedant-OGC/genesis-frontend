import React, { useEffect } from 'react';
import './AboutPage.css';

export default function DownloadPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="about-page">
            <nav className="about-nav">
                <a href="#/" className="about-logo">GENESIS</a>
                <div className="about-nav-links">
                    <a href="#/">Research</a>
                    <a href="#/about">About</a>
                </div>
            </nav>

            <div className="about-container">
                <header className="about-header">
                    <h1 className="about-title">Download</h1>
                    <p className="about-subtitle">We are currently actively working on native desktop applications. Please check back soon for our macOS, Windows, and Linux releases.</p>
                </header>
                
                <footer className="about-footer">
                    <div style={{ textAlign: "center", marginTop: "40px" }}>
                        <a href="#/about" className="back-link">← Return to About</a>
                    </div>
                </footer>
            </div>
        </div>
    );
}
