import React, { Component, Fragment } from 'react'
import CardCommande from './CardCommande';

export class Commande extends Component {
  render() {
    return (
      <div className="sticky">
        <CardCommande listCommande={this.props.listCommande} removeCommande={this.props.removeCommande}/>
      </div>
    )
  }
}

export default Commande
