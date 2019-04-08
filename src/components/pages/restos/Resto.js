import React, { Component, Fragment } from "react";
import Header from "../../layouts/Header";
import CardResto from "./CardResto";
import { Grid,Typography,Paper } from "@material-ui/core";

export class Resto extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allResto: [1, 2, 3, 4, 5, 6, 7, 8]
    };
  }

  render() {
    console.log(this.state.allResto);
    let restos = this.state.allResto.map((resto, index) => (
      <Grid item xs={12} md={6} sm={6}>
        <CardResto key={index} />
      </Grid>
    ));
    return (
      <Fragment>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className="papers">
              <Typography gutterBottom variant="h6" color="primary" align="center" component="h2">
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

export default Resto;
