// src/components/Modal.jsx
import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import gsap from 'gsap';
import '../styles/Modal.css';

export default function Modal({ isOpen, onClose, title, children }) {
    const dialogRef = useRef(null);

    useEffect(() => {
        if (!isOpen) return;
        document.body.style.overflow = 'hidden';
        const el = dialogRef.current;
        const tl = gsap.timeline();
        tl.fromTo(el, { opacity: 0, y: 18, scale: 0.98 }, { opacity: 1, y: 0, scale: 1, duration: 0.42, ease: 'power3.out' });
        return () => {
            tl.kill();
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen) return;
        const onKey = (e) => { if (e.key === 'Escape') onClose(); };
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return createPortal(
        <div className="modal-backdrop" onMouseDown={(e) => { if (e.target.classList.contains('modal-backdrop')) onClose(); }}>
            <div className="modal-content" role="dialog" aria-modal="true" aria-label={title || 'Modal'} ref={dialogRef}>
                <button className="modal-close" onClick={onClose} aria-label="Cerrar modal">✕</button>
                <div className="modal-body">{children}</div>
            </div>
        </div>,
        document.body
    );
}
