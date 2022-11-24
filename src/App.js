import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode is enabled", "success");
      document.title = "Textutils - darkMode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "Textutils - lightMode";
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <TextForm
          heading="Please enter the text"
          mode={mode}
          showAlert={showAlert}
        /> */}
          {/* <About /> */}

          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Please enter the text"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
            <Route exact path="/about" element={<About mode={mode} />} />
            {/* <Route exact path="/recovery-password" element={<RecoveryPassword/>}/> */}
            {/* <Route path="*" element={<NotFound/>}/> */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
