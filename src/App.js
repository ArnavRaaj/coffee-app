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
        {/* <Container maxWidth="md" sx={{mt:5}}> */}
          <CustomStepper />
        {/* </Container>    */}
      </div>
    );
  }
}

export default App;
