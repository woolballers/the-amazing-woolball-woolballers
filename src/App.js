import Navbar from "./components/navbar";
import NameManagement from "components/landingPage/nameManagement";
import { useState } from "react";

function App() {
  const [choosenName, setChoosenName] = useState("Neiman");
  return (
    <div className="App">
      <div className="container">
        <Navbar setChoosenName={setChoosenName} />
        <NameManagement choosenName={choosenName} />
      </div>
    </div>
  );
}

export default App;
