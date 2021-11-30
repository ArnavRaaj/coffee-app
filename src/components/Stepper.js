import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CoffeeCard from "./CoffeeCard";
import CoffeePrice from "./CoffeePrice";
import Final from "./Final";
import Counter from "./Counter";

const steps = ["Select Coffee", "Select type", "Add Sugar"];

class CustomStepper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      selectedCoffee: "Latte",
      hotPrice: "",
      coldPrice: "",
    };
  }
  handleStateChange = async (value, hotPrice, coldPrice) => {
    await this.setState({
      selectedCoffee: value,
      hotPrice: hotPrice,
      coldPrice: coldPrice,
    });
    console.log("this is type, hot , cold...", value, hotPrice, coldPrice);
  };
  handleNext = () => {
    this.setState({
      activeStep: this.state.activeStep + 1,
    });
    console.log("active step,,,,,", this.state.activeStep);
  };
  handleBack = () => {
    this.setState({
      activeStep: this.state.activeStep - 1,
    });
    console.log("active step,,,,,", this.state.activeStep);
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  render() {
    return (
      <div className="stepper-container">
        {this.state.activeStep > 2 ? (
          <>
            <Final
              selectedCoffee={this.state.selectedCoffee}
              hotPrice={this.state.hotPrice}
              coldPrice={this.state.coldPrice}
            />
          </>
        ) : (
          <Box className="stepper" sx={{ width: "70%" }}>
            <Stepper
              activeStep={this.state.activeStep}
              className="StepperContainer"
            >
              {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel className="steplabel" {...labelProps}>
                      {label}
                    </StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            <React.Fragment>
              {this.state.activeStep === 0 ? (
                <CoffeeCard handleStateChange={this.handleStateChange} />
              ) : this.state.activeStep === 1 ? (
                <CoffeePrice
                  selectedCoffee={this.state.selectedCoffee}
                  hotPrice={this.state.hotPrice}
                  coldPrice={this.state.coldPrice}
                />
              ) : (
                <React.Fragment>
                  <Counter />
                  <Box sx={{ display: "flex", flexDirection: "row", pt: 1 }}>
                    <Box sx={{ flex: "1 1 auto" }} />
                    <Button onClick={this.handleReset}>Reset</Button>
                  </Box>
                </React.Fragment>
              )}
              <Box sx={{ display: "flex", flexDirection: "row", pt: 1 }}>
                <Button
                  color="inherit"
                  disabled={this.state.activeStep === 0}
                  onClick={this.handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Box sx={{ flex: "4 4 auto" }} />
                <Button onClick={this.handleNext}>
                  {this.state.activeStep === steps.length - 1
                    ? "Finish"
                    : "Next"}
                </Button>
              </Box>
            </React.Fragment>
          </Box>
        )}
      </div>
    );
  }
}

export default CustomStepper;

/**
 * FUNCTIONAL COMPONENT FOR REFERENCE
 */

// export default function HorizontalLinearStepper() {
//     const [activeStep, setActiveStep] = React.useState(0);

//     const handleNext = () => {
//         setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     };

//     const handleBack = () => {
//         setActiveStep((prevActiveStep) => prevActiveStep - 1);
//     };

//     const handleReset = () => {
//         setActiveStep(0);
//     };

//     return (
//         <Box sx={{ width: '100%' }}>
//             <Stepper activeStep={activeStep}>
//                 {steps.map((label, index) => {
//                     const stepProps = {};
//                     const labelProps = {};
//                     return (
//                         <Step key={label} {...stepProps}>
//                             <StepLabel {...labelProps}>{label}</StepLabel>
//                         </Step>
//                     );
//                 })}
//             </Stepper>
//             {activeStep === steps.length ? (
//                 <React.Fragment>
//                     <Typography sx={{ mt: 2, mb: 1 }}>
//                         All steps completed - you&apos;re finished
//                     </Typography>
//                     <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
//                         <Box sx={{ flex: '1 1 auto' }} />
//                         <Button onClick={handleReset}>Reset</Button>
//                     </Box>
//                 </React.Fragment>
//             ) : (
//                 <React.Fragment>
//                     {activeStep === 0
//                         ? <Typography sx={{ mt: 2, mb: 1 }}> <CoffeeCard /></Typography>
//                         : <Typography sx={{ mt: 2, mb: 1 }}> <CoffeeCard /></Typography>}

//                     <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
//                         <Button
//                             color="inherit"
//                             disabled={activeStep === 0}
//                             onClick={handleBack}
//                             sx={{ mr: 1 }}
//                         >
//                             Back
//                         </Button>
//                         <Box sx={{ flex: '1 1 auto' }} />
//                         <Button onClick={handleNext}>
//                             {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
//                         </Button>
//                     </Box>
//                 </React.Fragment>
//             )}
//         </Box>
//     );
// }
