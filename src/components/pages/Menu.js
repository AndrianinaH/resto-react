import React, { Component } from "react";
import Header from "../layouts/Header";


export class Menu extends Component {
  
  render() {
    const { match: { params } } = this.props;
    return (
      <div>
        Menu {params.id}
      </div>
    );
  }
}

export default Menu;
