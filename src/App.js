import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Nav/Nav";
import ImeiSearcher from "./components/ImeiSearcher/ImeiSearcher";
import PhoneData from "./components/PhoneData/PhoneData";
import { useState } from "react";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [imei, setImei] = useState(null);
  const [model, setModel] = useState(null);

  const onSearch = (input) => {
    setImei(input);
  };
  const onClose = () => {
    setImei(null);
  };
  const onSelectIphone = (id) => {
    setModel(id);
  };

  return (
    <>
      <NavBar />
      <ImeiSearcher onSearch={onSearch} onSelectIphone={onSelectIphone} />
      {imei && model && (
        <PhoneData imei={imei} onClose={onClose} model={model} />
      )}
      <Footer />
    </>
  );
};

function hideSelect() {
  var phoneSelector = document.getElementById("phoneSelector");
  phoneSelector.style.display = "none";
}

  

export default App;
