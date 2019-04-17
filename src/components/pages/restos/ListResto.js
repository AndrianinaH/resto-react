import React, { Component, Fragment } from "react";
import CardResto from "./CardResto";
import { Grid, Typography, Paper } from "@material-ui/core";
import base from "../../base";

export class ListResto extends Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurants: {}
    };
  }

  componentWillMount() {
    this.restoRef = base.syncState("restaurants", {
      context: this,
      state: 'restaurants'
    })
  }

  componentWillUnmount() {
    base.removeBinding(this.restoRef);
  }


  render() {
    console.log(this.state.restaurants);
    let restos = Object.keys(this.state.restaurants).map((key, index) => {
      let el = this.state.restaurants[key];
      return <Grid item xs={12} md={6} sm={6}>
        <CardResto key={index} restaurant={el} />
      </Grid>
    });

    return (
      <Fragment>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className="papers">
              <Typography variant="h6" color="primary" align="center" component="h2">
                Liste des restaurants
              </Typography>
            </Paper>
          </Grid>
          {restos}
        </Grid>
      </Fragment>
    );
  }
}

export default ListResto;
