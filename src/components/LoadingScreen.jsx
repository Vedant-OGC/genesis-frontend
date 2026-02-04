import { useState, useEffect } from 'react';

const loadingStates = [
    { text: "Initializing GENESIS..." },
    { text: "Connecting neural pathways..." },
    { text: "Calibrating research engine..." },
    { text: "Loading knowledge base..." },
    { text: "Preparing your experience..." },
    { text: "Almost there..." },
];

export default function LoadingScreen({ onLoadingComplete }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [isFadingOut, setIsFadingOut] = useState(false);

    useEffect(() => {
        // Progress through loading states
        const interval = setInterval(() => {
            setCurrentIndex((prev) => {
                if (prev < loadingStates.length - 1) {
                    return prev + 1;
                }
                return prev;
            });
        }, 800);

        // Minimum display time, then check if ready
        const minDisplayTime = setTimeout(() => {
            // Start fade out
            setIsFadingOut(true);

            // Remove loading screen after fade
            setTimeout(() => {
                setIsVisible(false);
                onLoadingComplete?.();
            }, 500);
        }, loadingStates.length * 800 + 500);

        return () => {
            clearInterval(interval);
            clearTimeout(minDisplayTime);
        };
    }, [onLoadingComplete]);

    if (!isVisible) return null;

    return (
        <div className={`loading-screen ${isFadingOut ? 'fade-out' : ''}`}>
            <div className="loading-content">
                {/* Genesis Logo */}
                <div className="loading-logo">
                    <svg
                        width="60"
                        height="60"
                        viewBox="0 0 66 65"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
                            stroke="var(--accent)"
                            strokeWidth="6"
                            strokeMiterlimit="3.86874"
                            strokeLinecap="round"
                            className="loading-logo-path"
                        />
                    </svg>
                </div>

                {/* Loading Text */}
                <div className="loading-text-container">
                    {loadingStates.map((state, index) => (
                        <div
                            key={index}
                            className={`loading-text ${index === currentIndex ? 'active' : ''} ${index < currentIndex ? 'done' : ''}`}
                        >
                            {state.text}
                        </div>
                    ))}
                </div>

                {/* Progress Bar */}
                <div className="loading-progress-bar">
                    <div
                        className="loading-progress-fill"
                        style={{ width: `${((currentIndex + 1) / loadingStates.length) * 100}%` }}
                    />
                </div>
            </div>
        </div>
    );
}
