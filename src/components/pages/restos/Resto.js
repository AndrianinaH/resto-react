import React, { Component, Fragment } from "react";
import { Grid, Paper } from "@material-ui/core";
import ContentResto from "./ContentResto";
import CardCarte from "./CardCarte";
import Menu from "./Menu";
import Commande from "../commandes/Commande";
import base from "../../base";


export class Resto extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allMenu: [1, 2, 3],
      allCard: [1, 2, 3, 4, 5, 6, 7, 8],
      allPlat: [1, 2, 3, 4, 5, 6, 7, 8],
      restaurant: {},
      carte: {
        plat0: {
          nom: "ravitoto sy henakisoa",
          type: "plat",
          description: "riz, viande de porc et ravitoto",
          photo: "photo",
          prix: 3000
        },
        plat1: {
          nom: "salade cézar",
          type: "hors d'oeuvre",
          description: "salade verte, tomate, jambon cru, oeuf dur",
          photo: "photo",
          prix: 5000
        },
        plat2: {
          nom: "tarte au citron",
          type: "dessert",
          description: "citron",
          photo: "photo",
          prix: 35000
        }
      },
      commande: {}
    };
  }

  addCommande(value, key) {
    const copieCommande = { ...this.state.commande };
    const keyCommande = "commande" + key;

    if (copieCommande[keyCommande]) {
      copieCommande[keyCommande].quantite++;
    } else {
      copieCommande[keyCommande] = Object.assign({}, value, { "quantite": 1 });
    }
    copieCommande[keyCommande].prix *= copieCommande[keyCommande].quantite;

    this.setState({
      commande: copieCommande
    })
  }

  removeCommande(key) {
    const copieCommande = { ...this.state.commande };
    delete copieCommande[key];
    this.setState({
      commande: copieCommande
    });
  }

  componentWillMount() {
    const { match: { params } } = this.props;
    this.ref = base.syncState("cartes/"+params.id, {
      context: this,
      state: "restaurant"
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  render() {
    const { match: { params } } = this.props;

    let menus = this.state.allMenu.map((resto, index) => (
      <Grid item xs={12}>
        <Menu key={index} id={index} />
      </Grid>
    ));

    return (
      <div>
        <Fragment>
          <Grid container spacing={24}>
            <Grid item xs={12} md={2} sm={12}></Grid>
            <Grid item xs={12} md={8} sm={12}>
              <ContentResto {...this.props} detail={this.state.restaurant} />
            </Grid>
            <Grid item xs={12} md={2} sm={12}></Grid>
            <Grid item xs={12} md={6} sm={12}>
              <CardCarte carte={this.state.carte} addCommande={this.addCommande.bind(this)} />
            </Grid>
            <Grid item xs={12} md={6} sm={12}>
              {/* afficher nos commandes */}
              <Commande listCommande={this.state.commande} removeCommande={this.removeCommande.bind(this)} />
            </Grid>
          </Grid>
        </Fragment>
      </div>
    );
  }
}

export default Resto;
