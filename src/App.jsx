import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Display from "./components/Display";

function App() {
  const [display, setDisplay] = useState("");

  const handleClickButton = (e) => {
    const btnValue = e.target.textContent;
    if (btnValue === "C") {
      setDisplay("");
    } else if (btnValue === "=") {
      let result = eval(display);
      setDisplay(result.toString());
    } else {
      setDisplay(display + btnValue);
    }
  };
  return (
    <div className="container">
      <Display display={display} />
      <Button clickButton={handleClickButton} />
    </div>
  );
}

export default App;
