import React, { Component, Fragment } from "react";
import CardResto from "./CardResto";
import { Grid, Typography, Paper, InputBase } from "@material-ui/core";
import base from "../../base";
import { Search } from "@material-ui/icons";

export class ListResto extends Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurants: {},
      allResto: {}
    };
  }

  findResto() {
    let textSearch = this.inputSearch.value;
    console.log(textSearch);
    if (textSearch != "") {
      if (this.state.restaurants.length !== 0) {
        let findResult = this.state.restaurants.filter(resto => {
          return (
            resto.cuisine.includes(textSearch) || resto.nom.includes(textSearch)
          );
        });
        console.log(findResult);
        this.setState({ restaurants: findResult });
      }
    } else {
      this.setState({ restaurants: this.state.allResto });
    }
  }

  componentWillMount() {
    this.restoRef = base.syncState("restaurants", {
      context: this,
      state: "restaurants"
    });
    this.setState({ allResto: { ...this.state.restaurants } });
  }

  componentWillUnmount() {
    base.removeBinding(this.restoRef);
  }

  render() {
    console.log(this.state.restaurants);
    let restos = Object.keys(this.state.restaurants).map((key, index) => {
      let el = this.state.restaurants[key];
      return (
        <Grid item xs={12} md={6} sm={6}>
          <CardResto key={index} restaurant={el} />
        </Grid>
      );
    });

    return (
      <Fragment>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className="papers">
              <Typography
                variant="h6"
                color="primary"
                align="center"
                component="h2"
              >
                Liste des restaurants
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={3} />
          <Grid item xs={6}>
            <Paper className="papers">
              <Search className="searchIcon" />
              <InputBase
                onChange={() => this.findResto()}
                inputRef={input => (this.inputSearch = input)}
                className="searchInput"
                align="center"
                placeholder="Rechercher..."
              />
            </Paper>
          </Grid>
          <Grid item xs={3} />
          <Grid item xs={12} />
          {restos}
        </Grid>
      </Fragment>
    );
  }
}

export default ListResto;
