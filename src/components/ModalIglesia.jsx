// src/components/ModalIglesia.jsx
import React from 'react';
import Modal from './Modal';
import iglesiaImg from '/iglesia.jpg';
import '../styles/ModalIglesia.css';

export default function ModalIglesia({ isOpen, onClose }) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Iglesia San Alfonso">
            <div className="iglesia-wrapper">
                <img src={iglesiaImg} alt="Iglesia San Alfonso" loading="lazy" />
            </div>
        </Modal>
    );
}
