// src/components/Invitate.jsx
import React from 'react';
import InviteCard from './InviteCard';
import fondoImg from '/fondo.jpg';
import '../styles/Invitate.css';

export default function Invitate() {
    return (
        <div className="invitate-root" style={{ backgroundImage: `url(${fondoImg})` }}>
            <InviteCard />
        </div>
    );
}
