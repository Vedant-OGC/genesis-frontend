import { useEffect } from 'react';

export default function Header() {
    return (
        <header className="header">
            <div className="logo">
                <div className="logo-icon">
                    <span></span>
                    <span></span>
                </div>
                GENESIS
            </div>
            <nav className="nav-links">
                <a href="#research">Research</a>
                <a href="#about">About</a>
            </nav>
        </header>
    );
}
