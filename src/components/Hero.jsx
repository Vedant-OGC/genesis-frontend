import { useEffect, useRef, useState } from 'react';

export default function Hero() {
    const videoRef = useRef(null);
    const [videoError, setVideoError] = useState(false);

    useEffect(() => {
        // Animate GENESIS letters with anime.js
        const loadAnime = async () => {
            try {
                const { animate, svg, stagger } = await import('https://esm.sh/animejs');
                animate(svg.createDrawable('.genesis-letter'), {
                    draw: ['0 0', '0 1'],
                    ease: 'inOutQuad',
                    duration: 2000,
                    delay: stagger(120),
                    loop: true,
                    endDelay: 10000
                });
            } catch (error) {
                console.warn('anime.js animation failed:', error);
            }
        };
        loadAnime();
    }, []);

    return (
        <section className="hero">
            <div className="video-container">
                {!videoError ? (
                    <video
                        ref={videoRef}
                        autoPlay
                        muted
                        loop
                        playsInline
                        onError={() => setVideoError(true)}
                    >
                        <source src="/main-vid.mp4" type="video/mp4" />
                    </video>
                ) : (
                    <div className="orb-fallback"></div>
                )}
            </div>

            <h1 className="headline">
                <span className="genesis-animated">
                    <svg className="genesis-svg" viewBox="0 0 380 70" preserveAspectRatio="xMidYMid meet">
                        <defs>
                            <linearGradient id="genesisGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" style={{ stopColor: '#e89f6b' }} />
                                <stop offset="50%" style={{ stopColor: '#f0b88a' }} />
                                <stop offset="100%" style={{ stopColor: '#e89f6b' }} />
                            </linearGradient>
                        </defs>
                        <g stroke="url(#genesisGradient)" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                            {/* G */}
                            <path className="genesis-letter" d="M45 20 C45 8 35 3 25 3 C12 3 5 12 5 30 C5 48 12 57 25 57 C35 57 45 52 45 40 L45 35 L28 35 M28 35 L28 30" />
                            {/* E */}
                            <path className="genesis-letter" d="M80 5 L55 5 L55 57 L80 57 M55 30 L75 30" />
                            {/* N */}
                            <path className="genesis-letter" d="M90 57 L90 5 M90 5 L120 57 M120 57 L120 5" />
                            {/* E */}
                            <path className="genesis-letter" d="M165 5 L140 5 L140 57 L165 57 M140 30 L160 30" />
                            {/* S */}
                            <path className="genesis-letter" d="M200 12 C200 5 190 3 182 3 C172 3 168 10 168 18 C168 26 175 30 185 33 C195 36 202 42 202 52 C202 60 192 65 182 65 C172 65 165 60 165 55" />
                            {/* I */}
                            <path className="genesis-letter" d="M225 5 L245 5 M235 5 L235 57 M225 57 L245 57" />
                            {/* S */}
                            <path className="genesis-letter" d="M285 12 C285 5 275 3 267 3 C257 3 253 10 253 18 C253 26 260 30 270 33 C280 36 287 42 287 52 C287 60 277 65 267 65 C257 65 250 60 250 55" />
                        </g>
                    </svg>
                </span>
                <span className="headline-rest"> — an intelligence with presence.</span>
            </h1>

            <p className="description">
                Your curiosity deserves more than generic answers. With Project GENESIS, we are offering
                research. Context. Conscious exploration — delivered through a system that thinks with depth.
            </p>

            <div className="cta-group">
                <a href="#research" className="btn btn-ghost">Learn more</a>
                <a href="#research" className="btn-creative-right group">
                    <span className="btn-creative-text">Start the research</span>
                    <div className="btn-creative-hover">
                        <span>Start the research</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <polyline points="19 12 12 19 5 12"></polyline>
                        </svg>
                    </div>
                    <div className="btn-creative-fill"></div>
                </a>
            </div>

            <div className="scroll-indicator">Scroll</div>
        </section>
    );
}
