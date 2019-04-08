import React, { Component } from "react";
import { Link } from "react-router-dom";


export class Menu extends Component {
  
  render() {
    const { match: { params } } = this.props;
    return (
      <div>
        <Link to="/">to home</Link>
        <br></br>
        Menu {params.id}
      </div>
    );
  }
}

export default Menu;
