import React, { useState } from 'react';
import Modal from './Modal';
import "./Kyc.css"

const Kyc = ({ showModal, closeModal }) => {
  return (
    <div className={`modal ${showModal ? 'show' : ''}`}>
      
      <div className="modal-content">
        <p className='agree-text'>
          You agree to start the KYC process and share the information with the company.
        </p>
        <Modal/>
      </div>
    </div>
  );
};

export default Kyc;
