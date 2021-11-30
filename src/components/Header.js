import React from "react";
import "../CSS/style.css";

class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <h1 className="header-h1">'What goes best with a cup of coffee?'</h1>
        <p> - Another Cup!</p>
      </div>
    );
  }
}

export default Header;
