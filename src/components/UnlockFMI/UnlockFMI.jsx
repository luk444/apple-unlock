import React, { useState } from "react";
import Loader from "../Loader/Loader";

const UnlockFMI = () => {
  const [loadMessage, setLoadMessage] = useState(null);
  const [error, setError] = useState(false)

  const handleUnlock = () => {
    setLoadMessage("Encriptando Token de activación")
    setTimeout(() => {
      setLoadMessage("Conectando con servidor");
    }, 3000);
    setTimeout(() => {
      setLoadMessage("Enviando token");
    }, 6000);
    setTimeout(() => {
      setLoadMessage("Esperando confirmación del servidor");
    }, 8000);
    setTimeout(() => {
      setLoadMessage(null);
      setError(true)
    }, 15000);
    
  };
// 1. Encriptando Token de activación 
// 2. Conectando con servidor 
// 3. Enviando token 
// 4. Esperando confirmación del servidor
  return (
    <>
      { loadMessage ? (
        <>
          <Loader />
          <p className="margin">{loadMessage}</p>
        </>
      ) : error ? (
        <>
        <br />
          <p className="error margin">
            FAILED UNLOCK APPLE ID
          </p>
          <p className="l-rojo">
            the password was changed
          </p>
        </>
      ) : (
        <>
          <button className="azul unlock" onClick={handleUnlock}>
            UNLOCK FIND MY IPHONE
          </button>
          <p className="margin">
            <span className="boton registrado-color registrado">Device Registered!</span>
          </p>
        </>
      )}
    </>
  );
};

export default UnlockFMI;
