import { Synaps } from '@synaps-io/verify-sdk'
import React, { useEffect, useState } from 'react';




const Modal = () =>{
    const [sessionId, setSessionId] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://api.synaps.io/v4/session/init', {
            method: 'POST',
            headers: {
              'Api-Key': process.env.REACT_APP_API_KEY,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              alias: 'MY_ALIAS',
            }),
          });
  
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
  
          const data = await response.json();
          console.log(data.session_id); // Log the response data
  
          // Set the session ID in the state
          setSessionId(data.session_id);
        } catch (error) {
          console.error('An error occurred:', error);
          // Handle errors, e.g., show an error message to the user
        }
      };
  
      fetchData(); // Call the async function when the component mounts
    }, []);
  
    // Synapse Modal
    useEffect(() => {
      if (sessionId) {
        let init = true;
  
        Synaps.init({
          sessionId: sessionId,
          onFinish: () => {
            alert('Verification finished');
          },
          mode: 'modal',
        });
  
        return () => {
          init = false;
        };
      }
    }, [sessionId]);
  
    const handleOpen = () => {
      if (sessionId) {
        Synaps.show();
      }
    };
  
    return (
      <div className="App">
        <button onClick={handleOpen}>Start verification</button>
      </div>
    );
}

export default Modal