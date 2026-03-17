import React, { useEffect } from 'react';
import './AboutPage.css';

export default function BlogPage() {
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
                    <h1 className="about-title">The Genesis Blog</h1>
                    <p className="about-subtitle">Insights into how we build research assistants.</p>
                </header>

                <section className="about-content">
                    <div className="about-text-block">
                        <h2>Quality Control</h2>
                        <div className="about-text-content">
                            <h3>Achieving Extreme Rigor</h3>
                            <p>One of the biggest challenges with Large Language Models in research tasks is hallucination and superficiality. To combat this, we introduced the <strong>Overseer Agent</strong> into Genesis. This agent operates strictly as a quality control mechanism. It evaluates proposed analytical structures against the user query, looking for logical gaps, lack of depth, and potential biases.</p>
                            <br/>
                            <h3>User-Driven Improvisation</h3>
                            <p>Automation shouldn't mean replacing human intuition. We realized that researchers need to course-correct the AI mid-flight. Our new <strong>Interrogation Chat</strong> allows users to inject specific directives—such as focusing on qualitative evidence or acknowledging counter-arguments—before the final synthesis phase begins. This human-in-the-loop approach guarantees that Genesis serves as an intellectual amplifier, not an unpredictable black box.</p>
                        </div>
                    </div>
                </section>
                
                <footer className="about-footer">
                    <div style={{ textAlign: "center", marginTop: "40px" }}>
                        <a href="#/about" className="back-link">← Return to About</a>
                    </div>
                </footer>
            </div>
        </div>
    );
}
