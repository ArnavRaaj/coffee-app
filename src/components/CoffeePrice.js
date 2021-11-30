import React from "react";
import Button from "@mui/material/Button";

class CoffeePrice extends React.Component {
  constructor(props) {
    super(props);
    console.log("props in price... ", props);
    this.state = {
      coffee: "",
    };
  }

  componentDidMount = async () => {
    await this.setState({
      coffee: this.props.selectedCoffee,
    });
    console.log(this.coffee, "....selected");
  };

  render() {
    return (
      <div className="price-container">
        <h3 className="selected-coffee-container">
          You have selected <h2 className="selected-coffee-name"> {this.state.coffee}</h2>
        </h3>

        <div className="hot-cold-btn-container">
          <Button
          className="hot-price"
            style={{
              border: "1px solid",
              color: "crimson",
              width: "10rem",
            }}
          >
            Hot : {this.props.hotPrice}
          </Button>
          <Button style={{ border: "1px solid blue", width: "10rem" }}>
            Cold : {this.props.coldPrice }
          </Button>
        </div>
      </div>
    );
  }
}

export default CoffeePrice;
