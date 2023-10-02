import React , { useState } from "react";
import Kyc from "./Kyc";
import { useParams } from "react-router-dom";


const Home = ({sessionId,redirectUrl,nonce}) =>{
    const [showModal, setShowModal] = useState(true); // Set showModal to true initially to open the modal
    // const {sessionId} = useParams()

    const closeModal = () => {
      setShowModal(false);

    };

    return (
        <div>
            <Kyc sessionId= {sessionId}
            redirectUrl = {redirectUrl}
            nonce= {nonce}
            showModal={showModal} closeModal={closeModal} />
        </div>
    )
}

export default Home