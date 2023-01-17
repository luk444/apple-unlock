import React, { useState } from "react";
import register from "../../assets/register.svg";
import question from "../../assets/question.svg";
import Info from "../Info/Info";
import PhoneSelector from "../PhoneSelector/PhoneSelector";
import "./styles.css";
const ImeiSearcher = ({ onSearch, onSelectIphone }) => {
  const [input, setInput] = useState(null);
  return (
    <div className="containerImei">
      <h2>Registrar Dispositivo</h2>
      <div className="contentContainer">
        <div className="imeiInput">
          <input
            type="text"
            placeholder="Enter your IMEI/Serial"
            className="input"
            onChange={(event) => setInput(event.target.value)}
          />
          <button
            className="button1"
            onClick={() => onSearch(input)}
            disabled={input === null}
          >
            <img src={register} width={15} alt="search" />
          </button>
          <button className="button2">
            <img src={question} width={15} alt="search" />
          </button>
        </div>
        <PhoneSelector onSelectIphone={onSelectIphone} />
      </div>
      <div className="infoContainer">
        <Info
          color="violet"
          text="We've added the official blacklist status to IMEI checks, and restored the FMI status for Serial checks!"
        />
        <Info
          color="violet"
          text="Register to be able to Unlock and also be able to check the information of the model, the status of Find my iPhone, the activation status and also the status of Enacom, Apple Report."/>
      </div>
    </div>
  );
};

export default ImeiSearcher;
