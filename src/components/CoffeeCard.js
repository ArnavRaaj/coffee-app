import { data } from "../data/data";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

class CoffeeCard extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSelectedCoffee(e) {
    let value = e.target.value;
    let hotPrice = e.target.attributes.hot.value;
    let coldPrice = e.target.attributes.cold.value;
    console.log("e", e.target);
    console.log("hot..", hotPrice);
    console.log("cold...", coldPrice);
    this.props.handleStateChange(value, hotPrice, coldPrice);
  }

  render() {
    return (
      <div className="coffee-container">
        {data.map(
          ({
            id,
            cImage,
            cName,
            cDetails,
            hotCoffeePrice, 
            coldCoffeePrice,
          }) => {
            return (
              <Card
                key={id}
                className="coffee-card"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <CardMedia
                  className="coffee-image"
                  component="img"
                  image={cImage}
                  alt="bl"
                />

                <CardContent
                  style={{
                    paddingLeft: "1rem",
                    color: "#000000",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    style={{ fontFamily: "cursive", fontWeight: "bold" }}
                  >
                    {cName}
                  </Typography>
                  <Typography gutterBottom variant="p" component="div">
                    {cDetails}
                  </Typography>
                </CardContent>
                <CardActions className="orderBtnContainer">
                  <Button
                    className="coffee-btn"
                    onClick={(e) => this.handleSelectedCoffee(e)}
                    value={cName}
                    hot={hotCoffeePrice}
                    cold={coldCoffeePrice}
                    style={{
                      border: "1px solid blue",
                      height: "100%",
                      width: "10rem",
                    }}
                  >
                    Select
                  </Button>
                </CardActions>
              </Card>
            );
          }
        )}
      </div>
    );
  }
}

export default CoffeeCard;
