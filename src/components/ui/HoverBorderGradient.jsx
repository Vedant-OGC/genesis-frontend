import React, { useState } from "react";

export function HoverBorderGradient({
    children,
    containerClassName = "",
    className = "",
    as: Component = "button",
    ...props
}) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Component
            className={`hover-border-gradient-container ${containerClassName}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            {...props}
        >
            <div className={`hover-border-gradient-inner ${className}`}>
                {children}
            </div>
            <div className={`hover-border-gradient-border ${isHovered ? 'active' : ''}`} />
        </Component>
    );
}
