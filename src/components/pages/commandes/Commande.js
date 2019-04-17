import React, { Component, Fragment } from 'react'
import CardCommande from './CardCommande';

export class Commande extends Component {
  render() {
    return (
      <Fragment>
        <CardCommande listCommande={this.props.listCommande} removeCommande={this.props.removeCommande}/>
      </Fragment>
    )
  }
}

export default Commande
