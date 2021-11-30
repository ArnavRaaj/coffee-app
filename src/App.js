import Header from "./components/Header";
import "./CSS/style.css";
import CustomStepper from "./components/Stepper";
import React from "react";
import { Container } from "@mui/material";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CustomStepper />
      </div>
    );
  }
}

export default App;
