// src/components/ModalMap.jsx
import React from 'react';
import Modal from './Modal';
import '../styles/ModalMap.css';

export default function ModalMap({ isOpen, onClose }) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Ubicación - Iglesia San Alfonso">
            <div className="map-wrapper">
                <div className="iframe-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d929.1725413670455!2d-65.41446378009114!3d-24.783194451269893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bc3b975894d5b%3A0xf2c0115c766b171b!2sIglesia%20Santuario%20de%20Nuestra%20Se%C3%B1ora%20del%20Perpetuo%20Socorro%20y%20San%20Alfonso%20en%20Salta!5e1!3m2!1ses-419!2sar!4v1759592090023!5m2!1ses-419!2sar"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Mapa Iglesia San Alfonso"
                    />
                </div>
            </div>
        </Modal>
    );
}
