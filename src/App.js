import "./App.css";
import logo from "./assets/logo.png";
import { useState } from "react";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  // ALERT MESSAGE MANAGEMENT
  let alertColor = "result red";
  let alertMessage = "NO WAY";

  if (switch1 && switch2 && switch3) {
    alertColor = "result green";
    alertMessage = "GO !";
  }

  //SWITCHS MANAGEMENT

  let switch1State = "switchOff";
  let switch2State = "switchOff";
  let switch3State = "switchOff";

  if (switch1) {
    switch1State = "switchOn";
  }
  if (switch2) {
    switch2State = "switchOn";
  }
  if (switch3) {
    switch3State = "switchOn";
  }

  return (
    <div className="App">
      <header>
        <section className="header">
          <img src={logo} alt="logo" />
          <h1>Ready To Go</h1>
        </section>
      </header>
      <main>
        {/* SWITCHS */}
        <section>
          <div className={switch1State}>
            <span
              onClick={() => {
                setSwitch1(true);
              }}
            >
              ON
            </span>
            <span
              onClick={() => {
                setSwitch1(false);
              }}
            >
              OFF
            </span>
          </div>
          <div className={switch2State}>
            <span
              onClick={() => {
                setSwitch2(true);
              }}
            >
              ON
            </span>
            <span
              onClick={() => {
                setSwitch2(false);
              }}
            >
              OFF
            </span>
          </div>
          <div className={switch3State}>
            <span
              onClick={() => {
                setSwitch3(true);
              }}
            >
              ON
            </span>
            <span
              onClick={() => {
                setSwitch3(false);
              }}
            >
              OFF
            </span>
          </div>
          <div
            className="resetButton"
            onClick={() => {
              setSwitch1(false);
              setSwitch2(false);
              setSwitch3(false);
            }}
          >
            SET ALL OFF !
          </div>
        </section>

        {/* ALERT */}
        <section>
          <div className={alertColor}>{alertMessage}</div>
        </section>
      </main>
      <footer>
        <p>
          Made with React at <span className="bold">Le Reacteur</span> by{" "}
          <span className="bold">Freemulder</span>{" "}
        </p>
      </footer>
    </div>
  );
}

export default App;
