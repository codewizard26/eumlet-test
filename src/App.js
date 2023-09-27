import React, { useState } from 'react';
import './App.css';
import Kyc from './Kyc';

const App = () => {
  const [showModal, setShowModal] = useState(true); // Set showModal to true initially to open the modal

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <Kyc showModal={showModal} closeModal={closeModal} />
    </div>
  );
};

export default App;

