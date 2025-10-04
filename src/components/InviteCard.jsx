// src/components/InviteCard.jsx
import React, { useRef, useEffect, useState } from 'react';
import { FaCalendarAlt, FaClock, FaChurch, FaMapMarkerAlt } from 'react-icons/fa';
import IconButton from './IconButton';
import ModalIglesia from './ModalIglesia';
import ModalMap from './ModalMap';
import gsap from 'gsap';
import '../styles/InviteCard.css';

export default function InviteCard() {
    const cardRef = useRef(null);
    const nameRef = useRef(null);
    const [openChurch, setOpenChurch] = useState(false);
    const [openMap, setOpenMap] = useState(false);

    useEffect(() => {
        // entrada elegante
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();
            tl.from(cardRef.current, { duration: 0.6, y: 20, opacity: 0, scale: 0.995, ease: 'power2.out' })
                .from(nameRef.current, { duration: 0.9, y: 24, opacity: 0, ease: 'elastic.out(1,0.6)' }, '-=0.2')
                .from(cardRef.current.querySelectorAll('.icon-btn'), { duration: 0.45, y: 18, opacity: 0, stagger: 0.08 }, '-=0.6');
        }, cardRef);
        return () => ctx.revert();
    }, []);

    return (
        <>
            <div className="invite-card" ref={cardRef} role="region" aria-label="Invitación Misa de 15">
                <header className="invite-card-header">
                    <h1 ref={nameRef} className="invite-card-name">KARLA</h1>
                    <div className="invite-card-sub">MIS 15 AÑOS</div>
                </header>

                <div className="invite-card-actions">
                    {/* Apilados verticalmente */}
                    <IconButton icon={FaCalendarAlt} label="Martes 07 de Octubre" disabled />
                    <IconButton icon={FaClock} label="19:30 Hs" disabled />
                    <IconButton icon={FaChurch} label="Iglesia San Alfonso" onClick={() => setOpenChurch(true)} />
                    <IconButton icon={FaMapMarkerAlt} label="Leguizamón 812, Salta" onClick={() => setOpenMap(true)} />
                </div>
            </div>

            <ModalIglesia isOpen={openChurch} onClose={() => setOpenChurch(false)} />
            <ModalMap isOpen={openMap} onClose={() => setOpenMap(false)} />
        </>
    );
}
