// src/components/IconButton.jsx
import React, { useRef } from 'react';
import gsap from 'gsap';
import '../styles/IconButton.css';

export default function IconButton({ icon, label, onClick, disabled = false, ariaLabel }) {
    const btnRef = useRef(null);
    const Icon = icon;

    const handlePress = (e) => {
        // micro animación táctil
        const el = btnRef.current;
        if (!el) return;
        gsap.fromTo(el, { scale: 0.98 }, { scale: 1.02, duration: 0.12, yoyo: true, repeat: 1, ease: 'power1.inOut' });
        if (onClick && !disabled) onClick(e);
    };

    return (
        <button
            ref={btnRef}
            className={`icon-btn ${disabled ? 'is-disabled' : ''}`}
            onClick={disabled ? undefined : handlePress}
            aria-label={ariaLabel || label}
            aria-disabled={disabled}
            type="button"
        >
            <span className="icon-wrap" aria-hidden="true"><Icon /></span>
            <span className="btn-label">{label}</span>
        </button>
    );
}
