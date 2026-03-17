import React, { useEffect } from 'react';
import './AboutPage.css';

export default function AboutPage() {
    useEffect(() => {
        // Ensure page starts at top
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
                    <h1 className="about-title">The next frontier of automated research.</h1>
                    <p className="about-subtitle">Pioneering a rigorous, steerable, and transparent approach to AI-driven scientific discovery.</p>
                </header>

                <section className="about-content">
                    <div className="about-text-block">
                        <h2>Our Mission</h2>
                        <div className="about-text-content">
                            <p>At Project GENESIS, we believe that the pace of human discovery can be fundamentally accelerated. By augmenting researchers with autonomous, highly-capable AI agents, we are reducing the friction between formulating a hypothesis and reaching profound insight.</p>
                            <p>We are building systems that act not just as tools, but as collaborative peers capable of expansive literature review and rigorous synthesis.</p>
                        </div>
                    </div>

                    <div className="about-text-block">
                        <h2>Architecture</h2>
                        <div className="about-text-content">
                            <p>GENESIS employs a dual-agent architecture modeled after the most rigorous peer-review processes in academia.</p>
                            <ul>
                                <li><strong>The Primary Agent:</strong> Conducts expansive web research, synthesizes complex data streams, and drafts comprehensive analytical structures.</li>
                                <li><strong>The Overseer Agent:</strong> Acts as an adversarial critic. It identifies logical gaps, missing perspectives, and ensures extreme intellectual rigor before any structural proposal is finalized.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="about-text-block">
                        <h2>Steerability</h2>
                        <div className="about-text-content">
                            <p>We reject the paradigm of black-box automation. Through our "Interrogation Chat" interface, human researchers maintain crucial oversight. You can inject domain expertise mid-flight, refine the AI's proposed structures, and steer the contextual understanding before the final paper synthesis occurs.</p>
                        </div>
                    </div>

                    <div className="about-text-block">
                        <h2>Transparency</h2>
                        <div className="about-text-content">
                            <p>Trust is built on transparency. GENESIS maintains a persistent, append-only "Lab Book" detailing every query executed, source consulted, and reasoning leap taken by the agents. This ensures full auditability and reproducible research workflows.</p>
                        </div>
                    </div>
                </section>

                <footer className="about-footer">
                    <div className="footer-top">
                        <div className="footer-links-container">
                            <ul className="footer-link-group">
                                <li><a href="#/download">Download</a></li>
                                <li><a href="#/releases">Releases</a></li>
                            </ul>
                            <ul className="footer-link-group">
                                <li><a href="#/blog">Blog</a></li>
                                <li><a href="#/pricing">Pricing</a></li>
                                <li><a href="#/use-cases">Use Cases</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <h1 className="footer-logo">Genesis</h1>
                    </div>
                    <div style={{ textAlign: "center", marginTop: "40px" }}>
                        <a href="#/" className="back-link">← Return to Application</a>
                    </div>
                </footer>
            </div>
        </div>
    );
}
