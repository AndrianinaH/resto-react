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
      searchText : ""
    };
  }

  findResto() {
    let textSearch = this.inputSearch.value.toLowerCase();
    this.setState({searchText:textSearch})
  }

  componentWillMount() {
    this.restoRef = base.syncState("restaurants", {
      context: this,
      state: "restaurants"
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.restoRef);
  }


  render() {
    const { restaurants,searchText } = this.state;

    let restoFiltered = Object.keys(restaurants).map((key, index) => {
      return (
        restaurants[key]
      )
    }).filter((resto) => {
      return resto.nom.toLowerCase().includes(searchText) ||
      resto.cuisine.toLowerCase().includes(searchText)
      
    });

    let restos = Object.keys(restoFiltered).map((key, index) => {
      let el = restoFiltered[key];
      return (
        <Grid key={el._id} item xs={12} lg={4} md={6} sm={12}>
          <CardResto restaurant={el} />
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
                placeholder="Rechercher un Nom de resto ou type de cuisine..."
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
