import React from "react";
import phones from "../../data/phones";

const PhoneSelector = ({ onSelectIphone }) => {
  const handleOnSelect = (e) => {
    const value = e.target.value;
    console.log(value);
    onSelectIphone(value);
  };
  return (
    <select onChange={handleOnSelect} className="phoneSelector">
      <option value="">IPhone</option>
      {phones.map((phone) => (
        <option key={phone.id} value={phone.id} className="text-black">
          {phone.name}
        </option>
      ))}
    </select>
  );
};

export default PhoneSelector;
