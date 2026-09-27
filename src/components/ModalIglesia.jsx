// src/components/ModalIglesia.jsx
import React from 'react';
import Modal from './Modal';
import iglesiaImg from '/iglesia.jpg';
import '../styles/ModalIglesia.css';

export default function ModalIglesia({ isOpen, onClose }) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Parroquia San José">
            <div className="iglesia-wrapper">
                <img src={iglesiaImg} alt="Parroquia San José" loading="lazy" />
            </div>
        </Modal>
    );
}
