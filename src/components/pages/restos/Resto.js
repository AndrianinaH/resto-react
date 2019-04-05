import React, { Component, Fragment } from "react";
import Header from "../../layouts/Header";
import CardResto from './CardResto'

export class Resto extends Component {
  render() {
    return (
      <Fragment>
        <CardResto />
      </Fragment>
    );
  }
}

export default Resto;
