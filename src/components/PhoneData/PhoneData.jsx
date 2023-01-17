import React from "react";
import Modal from "../Modal/Modal";
import "./styles.css";
import phones from "../../data/phones";
import UnlockFMI from "../UnlockFMI/UnlockFMI";

const PhoneData = ({ imei, onClose, model }) => {
  // eslint-disable-next-line eqeqeq
  const iphone = phones.find((el) => el.id == model);
  return (
    <Modal onClose={onClose}>
      <div className="phoneDataContainer">
        <img
          className="phoneimg"
          src={iphone.img}
          alt="iphone img"
          width={100}
        />
        <h2 className="title">Apple {iphone?.name}</h2>
        <div className="data">
          <p>IMEI: {imei}</p>
          <p>
            Activation: <span className="boton verde">Device Activated</span>
          </p>
          <p>
            Find My IPhone: <span className="boton rojo">ON</span>
          </p>
          <p>
           
          </p>
          <br />
          <br />
          <hr />
          <UnlockFMI />
        </div>
      </div>
    </Modal>
  );
};

export default PhoneData;
