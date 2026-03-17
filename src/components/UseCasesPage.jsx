import React, { useEffect } from 'react';
import './AboutPage.css';

export default function UseCasesPage() {
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
                    <h1 className="about-title">Use Cases</h1>
                    <p className="about-subtitle">How professionals are leveraging Genesis.</p>
                </header>

                <section className="about-content">
                    <div className="about-text-block">
                        <h2>Academia</h2>
                        <div className="about-text-content">
                            <p><strong>Literature Review Generation:</strong> PhD students and professors use Genesis to rapidly map out entire fields of study. By leveraging the Interrogation Chat, academics can force Genesis to focus on specific methodological nuances, generating thorough and properly cited review structures in minutes rather than weeks.</p>
                            <br/>
                            <p><strong>Hypothesis Validation:</strong> Before applying for grants or investing months in a lab, researchers use Genesis to stress-test their ideas. The Overseer Agent actively searches for contradictory literature, enabling researchers to build more robust experimental designs that anticipate peer-review critique.</p>
                        </div>
                    </div>
                    
                    <div className="about-text-block">
                        <h2>Market Research</h2>
                        <div className="about-text-content">
                            <p><strong>Competitive Analysis:</strong> Business analysts employ Genesis to digest massive amounts of market data and news. The Overseer Agent is particularly valuable here, ensuring that Genesis doesn't draw spurious conclusions from unverified PR releases, maintaining a strict standard of evidence.</p>
                            <br/>
                            <p><strong>Trend Forecasting:</strong> Strategic leaders leverage our dual-agent system to synthesize unstructured signals across disparate industries. Genesis can ingest earnings call transcripts, patent filings, and regulatory updates simultaneously to propose cohesive narratives regarding emerging market trends.</p>
                        </div>
                    </div>

                    <div className="about-text-block">
                        <h2>Healthcare</h2>
                        <div className="about-text-content">
                            <p><strong>Clinical Trial Summarization:</strong> Medical researchers can ask Genesis to synthesize findings across dozens of trials for a specific protocol. Genesis structures the outcomes, while the researcher can pause and steer the results to focus purely on adverse effects or specific demographic responses.</p>
                            <br/>
                            <p><strong>Regulatory Compliance Tracking:</strong> Navigating FDA/EMA guidelines is notoriously complex. Compliance teams use Genesis to cross-reference their internal procedures against evolving international regulations. Genesis maintains a persistent logbook detailing exactly which regulatory documents were checked, ensuring full auditability.</p>
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
