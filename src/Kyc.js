import React, { useState } from 'react';
import Modal from './Modal';
import "./Kyc.css"

const Kyc = ({sessionId, redirectUrl , nonce , showModal, closeModal }) => {
  return (
    <div className={`modal ${showModal ? 'show' : ''}`}>
      
      <div className="modal-content">
        <p className='agree-text'>
          By starting the Know Your Customer (KYC) process, you agree to comply with our identity verification procedures and to submit accurate and complete
          information and documents. We prioritize privacy and will process and store information securely in accordance with our Privacy Policy.
        </p>
        <Modal sessionId={sessionId} redirectUrl={redirectUrl} nonce = {nonce}/>
      </div>
    </div>
  );
};

export default Kyc;
