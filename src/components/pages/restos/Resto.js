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
      desserts: {},
      plats: {},
      oeuvres: {},
      menus: {},
      commande: {}
    };
  }

  addCommande(value, key, resto) {
    const copieCommande = { ...this.state.commande };

    if (copieCommande[key]) {
      copieCommande[key].quantite++;
    } else {
      copieCommande[key] = Object.assign({}, value, { quantite: 1, resto: resto });
    }
    copieCommande[key].prix *= copieCommande[key].quantite;

    this.setState({
      commande: copieCommande
    });
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
    let restoDecrypt = JSON.parse(atob(params.id));
    this.ref = base.syncState("cartes/" + restoDecrypt._id, {
      context: this,
      state: "restaurant",
      then() {
        this.setState({ desserts: { ...this.state.restaurant.plats.dessert } });
        this.setState({ oeuvres: { ...this.state.restaurant.plats.oeuvre } });
        this.setState({ plats: { ...this.state.restaurant.plats.plat } });
        this.setState({ menus: { ...this.state.restaurant.menus } });
      }
    });
  }

  componentDidMount() {
    this.hydrateStateWithLocalStorage();

    // add event listener to save state to localStorage
    // when user leaves/refreshes the page
    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
    this.saveStateToLocalStorage();
    base.removeBinding(this.ref);
  }

  saveStateToLocalStorage() {
      localStorage.setItem("commande", JSON.stringify(this.state.commande));
  }

  hydrateStateWithLocalStorage() {
    if(localStorage.hasOwnProperty("commande")) {
      let value = localStorage.getItem("commande");
      try {
        value = JSON.parse(value);
        this.setState({ commande : value });
      } catch (e) {
        // handle empty string
        this.setState({ commande : value });
      }
    }
  }

  render() {
    const { match: { params } } = this.props;
    let restoDecrypt = JSON.parse(atob(params.id));

    return (
      <div>
        <Fragment>
          <Grid container spacing={24}>
            <Grid item xs={12} md={2} sm={12} />
            <Grid item xs={12} md={8} sm={12}>
              <ContentResto {...this.props} detail={restoDecrypt} />
            </Grid>
            <Grid item xs={12} md={2} sm={12} />
            <Grid item xs={12} md={6} sm={12}>
              <Grid container spacing={24}>
                <Grid item xs={12}>
                  <CardCarte
                    carte={this.state.carte}
                    addCommande={this.addCommande.bind(this)}
                    dessert={this.state.desserts}
                    oeuvre={this.state.oeuvres}
                    plat={this.state.plats}
                    menu={this.state.menus}
                    idResto={restoDecrypt._id}
                    resto={restoDecrypt.nom}
                  />
                </Grid>

              </Grid>
            </Grid>
            <Grid item xs={12} md={6} sm={12}>
              {/* afficher nos commandes */}
              <Commande
                listCommande={this.state.commande}
                removeCommande={this.removeCommande.bind(this)}
              />
            </Grid>
          </Grid>
        </Fragment>
      </div>
    );
  }
}

export default Resto;
