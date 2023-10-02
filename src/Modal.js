import { Synaps } from "@synaps-io/verify-sdk";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Modal = ({sessionId,redirectUrl,nonce}) => {

  const [redirect_Url,setRedirect_Url ] = useState(null)
  const session_Id = sessionId

console.log("session id recieved in modal ", sessionId)


  // Synapse Modal
  useEffect(() => {
    if (session_Id) {
      let init = true;

      Synaps.init({
        sessionId: sessionId,
        onFinish: () => {
          
          fetch(
            `https://api.synaps.io/v4/individual/session/${sessionId}`,
            {
              method: "GET",
              headers: {
                "Api-Key": process.env.REACT_APP_API_KEY,
              },
            }
          )
            .then((response) => {
              
              //console.log(response.json())
              return response.json()


            })
            .then((data) => {
              console.log("response", data)
              // setSessionDetails(data); // Set session details in state

              const redirectStatus = data?.session?.status || "UNKNOWN";
              if (redirectStatus === "PENDING_VERIFICATION" || redirectStatus === "VERIFIED"){
                alert("Verification finished");
                setRedirect_Url(redirectUrl)

              }
              else{
                setRedirect_Url()
              }
              
            })
            .catch((error) => {
              console.error("Error fetching session details:", error);
              // Handle errors
            });
        },
        mode: "modal",
      });

      return () => {
        init = false;
      };
    }
  }, [session_Id]);



  // when redirect url is set

  // useEffect(() => {
  //   if (redirectUrl) {
  //     window.location.href = redirectUrl;
  //   }
  // }, [redirectUrl]);

  const handleOpen = () => {
    if (session_Id) {
      Synaps.show();
    }
  };

  return (
    
    <div className="App">
      {session_Id?
      (<button onClick={handleOpen}>Start verification</button>):
      <p>Loading session id...</p>
      }
    </div>
  );
};

export default Modal;
