import { useState, useCallback, useEffect } from 'react';
import { marked } from 'marked';
import PhaseTracker from './PhaseTracker';
import { HoverBorderGradient } from './ui/HoverBorderGradient';
import { API_BASE_URL, RESEARCH_ENABLED } from '../config';

// Configure marked
marked.setOptions({ breaks: true, gfm: true });

// Genesis Logo Icon
const GenesisLogo = () => (
    <svg
        width="66"
        height="65"
        viewBox="0 0 66 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="genesis-btn-icon"
        style={{ width: '14px', height: '14px' }}
    >
        <path
            d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
            stroke="currentColor"
            strokeWidth="15"
            strokeMiterlimit="3.86874"
            strokeLinecap="round"
        />
    </svg>
);

const PLACEHOLDERS = [
    "Example: Is AI consciousness possible? What are the philosophical and technical barriers?",
    "Example: What is the current state of quantum computing for drug discovery?",
    "Example: How does sleep deprivation affect cognitive performance?",
    "Example: Analyze the impact of fusion energy on global geopolitics.",
    "Example: Explore the potential of CRISPR for curing genetic diseases."
];

export default function ResearchSection() {
    const [input, setInput] = useState('');
    const [sessionId, setSessionId] = useState(null);
    const [currentPhase, setCurrentPhase] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [thinkingText, setThinkingText] = useState('');
    const [outputText, setOutputText] = useState('');
    const [isThinkingOpen, setIsThinkingOpen] = useState(false);
    const [showApproval, setShowApproval] = useState(false);
    const [showOutput, setShowOutput] = useState(false);

    // Typewriter state
    const [placeholder, setPlaceholder] = useState('');
    const [placeholderIndex, setPlaceholderIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    // Typewriter Effect
    useEffect(() => {
        const currentText = PLACEHOLDERS[placeholderIndex];

        let timer;

        if (isPaused) {
            timer = setTimeout(() => {
                setIsPaused(false);
                setIsDeleting(true);
            }, 2000); // Wait 2s before deleting
            return () => clearTimeout(timer);
        }

        if (isDeleting) {
            if (charIndex > 0) {
                timer = setTimeout(() => {
                    setPlaceholder(currentText.substring(0, charIndex - 1));
                    setCharIndex(charIndex - 1);
                }, 30); // Deleting speed
            } else {
                setIsDeleting(false);
                setPlaceholderIndex((prev) => (prev + 1) % PLACEHOLDERS.length);
            }
        } else {
            if (charIndex < currentText.length) {
                timer = setTimeout(() => {
                    setPlaceholder(currentText.substring(0, charIndex + 1));
                    setCharIndex(charIndex + 1);
                }, 50); // Typing speed
            } else {
                setIsPaused(true);
            }
        }

        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, isPaused, placeholderIndex]);

    const decodeSSE = (text) => text.replace(/\\n/g, '\n');

    const startResearch = useCallback(async () => {
        const idea = input.trim();
        if (!idea) {
            alert('Please enter a research question!');
            return;
        }

        // Check if research is enabled
        if (!RESEARCH_ENABLED) {
            setShowOutput(true);
            setOutputText(`## Research Temporarily Paused

Live research is currently disabled to conserve API resources (Admin is broke).

**Want to see it in action?** Request a live demo from the creator.

**What you can do:**
- Explore the interface and features
- Check back in a few minutes
- Contact the admin for demo access

*Thank you for your patience!*`);
            return;
        }

        // Reset state
        setSessionId(null);
        setThinkingText('');
        setOutputText('');
        setCurrentPhase(1);
        setShowApproval(false);
        setShowOutput(true);
        setIsLoading(true);

        let currentOutput = '';
        let currentThinking = '';
        let phase = 1;

        try {
            const response = await fetch(`${API_BASE_URL}/genesis/research/start`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ idea })
            });

            const reader = response.body.getReader();
            const decoder = new TextDecoder();

            while (true) {
                const { value, done } = await reader.read();
                if (done) break;

                const chunk = decoder.decode(value);
                const lines = chunk.split('\n');

                for (const line of lines) {
                    if (!line.startsWith('data: ')) continue;

                    const data = line.substring(6);

                    if (data === '[DONE]') {
                        setOutputText(currentOutput);
                        setIsLoading(false);
                        return;
                    }

                    if (data.startsWith('[PHASE:')) {
                        const phaseNum = parseInt(data.match(/\d+/)?.[0] || 0);
                        if (phaseNum) {
                            phase = phaseNum;
                            setCurrentPhase(phaseNum);
                        }
                        continue;
                    }

                    if (data.startsWith('[SESSION_ID:')) {
                        const id = data.match(/\[SESSION_ID:(.+?)\]/)?.[1];
                        setSessionId(id);
                        continue;
                    }

                    if (data === '[SHOW_APPROVAL]') {
                        setShowApproval(true);
                        continue;
                    }

                    const decoded = decodeSSE(data);

                    if (phase === 2) {
                        currentThinking += decoded;
                        setThinkingText(currentThinking);
                    } else {
                        currentOutput += decoded;
                        setOutputText(currentOutput);
                    }
                }
            }
        } catch (error) {
            console.error('Error:', error);
            setOutputText(`<p style="color: #ef4444;">Error: ${error.message}</p>`);
        } finally {
            setIsLoading(false);
        }
    }, [input]);

    const approveAndGenerate = useCallback(async () => {
        if (!sessionId) {
            alert('Session expired. Please start over.');
            return;
        }

        setShowApproval(false);
        setCurrentPhase(5);
        setIsLoading(true);

        let currentOutput = outputText + '\n\n';

        try {
            const response = await fetch(`${API_BASE_URL}/genesis/research/approve`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ session_id: sessionId, approved: true })
            });

            const reader = response.body.getReader();
            const decoder = new TextDecoder();

            while (true) {
                const { value, done } = await reader.read();
                if (done) break;

                const chunk = decoder.decode(value);
                const lines = chunk.split('\n');

                for (const line of lines) {
                    if (!line.startsWith('data: ')) continue;

                    const data = line.substring(6);

                    if (data === '[DONE]') {
                        setOutputText(currentOutput);
                        setCurrentPhase(6);
                        setIsLoading(false);
                        return;
                    }

                    if (data.startsWith('[PHASE:')) continue;

                    const decoded = decodeSSE(data);
                    currentOutput += decoded;
                    setOutputText(currentOutput);
                }
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error generating paper. Please try again.');
        } finally {
            setIsLoading(false);
        }
    }, [sessionId, outputText]);

    const startOver = () => {
        setInput('');
        setSessionId(null);
        setThinkingText('');
        setOutputText('');
        setCurrentPhase(0);
        setIsThinkingOpen(false);
        setShowApproval(false);
        setShowOutput(false);
    };

    const copyOutput = () => {
        navigator.clipboard.writeText(outputText).then(() => {
            alert('Copied to clipboard!');
        });
    };

    const downloadOutput = () => {
        const blob = new Blob([outputText], { type: 'text/markdown' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'genesis-research.md';
        a.click();
        URL.revokeObjectURL(url);
    };

    const handleKeyDown = (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            e.preventDefault();
            startResearch();
        }
    };

    return (
        <section className="research-section" id="research">
            <h2 className="section-title">Begin Your Research</h2>

            <PhaseTracker currentPhase={currentPhase} />

            {/* Input Card */}
            <div className="input-card">
                <label className="input-label">💡 Enter your research curiosity or question</label>
                <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={placeholder}
                />
                <div className="input-footer">
                    <span className="input-hint">✦ The more specific your question, the deeper the research</span>
                    <HoverBorderGradient
                        as="button"
                        containerClassName="rounded-full"
                        onClick={startResearch}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <><span className="spinner spinner-light"></span> Researching...</>
                        ) : (
                            <>
                                <GenesisLogo />
                                <span>Start Research</span>
                            </>
                        )}
                    </HoverBorderGradient>
                </div>
            </div>

            {/* Output Section */}
            <div className="output-section">
                <div className="output-header">
                    <h3>Research Output</h3>
                    {showOutput && !isLoading && (
                        <div className="output-actions">
                            <button className="btn btn-outline btn-small" onClick={copyOutput}>📋 Copy</button>
                            <button className="btn btn-outline btn-small" onClick={downloadOutput}>📥 Download</button>
                        </div>
                    )}
                </div>

                {/* Placeholder */}
                {!showOutput && (
                    <div className="output-box">
                        <div className="placeholder">
                            <div className="placeholder-icon">🔬</div>
                            <p>Your research output will appear here</p>
                            <small>Research → Thinking → Analysis → Structure → Paper</small>
                        </div>
                    </div>
                )}

                {/* Thinking Toggle */}
                {thinkingText && (
                    <div className="thinking-section">
                        <button
                            className={`thinking-toggle ${isThinkingOpen ? 'open' : ''}`}
                            onClick={() => setIsThinkingOpen(!isThinkingOpen)}
                        >
                            <span>✦</span>
                            <span>{isThinkingOpen ? 'Hide thinking' : 'Show thinking'}</span>
                            <span className="arrow">▼</span>
                        </button>
                        {isThinkingOpen && (
                            <div
                                className="thinking-content"
                                dangerouslySetInnerHTML={{ __html: marked.parse(thinkingText) }}
                            />
                        )}
                    </div>
                )}

                {/* Main Output */}
                {showOutput && (
                    <div className="output-box">
                        <div
                            className="research-output"
                            dangerouslySetInnerHTML={{
                                __html: marked.parse(outputText) + (isLoading ? '<span class="cursor">▍</span>' : '')
                            }}
                        />
                    </div>
                )}

                {/* Approval Section */}
                {showApproval && (
                    <div className="approval-section">
                        <h3>📋 Structure Review</h3>
                        <p>Review the proposed structure above. Ready to generate the full research paper?</p>
                        <div className="approval-buttons">
                            <button
                                className="btn btn-success"
                                onClick={approveAndGenerate}
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <><span className="spinner"></span> Generating...</>
                                ) : (
                                    '✅ Approve & Generate Paper'
                                )}
                            </button>
                            <button className="btn btn-outline" onClick={startOver}>
                                🔄 Start Over
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
