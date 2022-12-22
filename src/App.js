import "./App.css";
import logo from "./assets/logo.png";
import { useState } from "react";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  return (
    <div className="App">
      <header>
        <section className="header">
          <img src={logo} alt="logo" />
          <h1>Ready To Go</h1>
        </section>
      </header>
      <main>
        <section className="container">
          <section className="selectors">
            <div>
              <div className="selector">ON</div>
              <div className="selector">ON</div>
              <div className="selector selected">ON</div>
            </div>
            <div>
              <div className="selector">OFF</div>
              <div className="selector selected">OFF</div>
              <div className="selector">OFF</div>
            </div>
          </section>
          <section>
            <div className="result red">NO WAY</div>
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
