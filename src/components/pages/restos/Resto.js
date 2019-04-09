import React, { Component, Fragment } from "react";
import { Grid, Paper } from "@material-ui/core";
import ContentResto from "./ContentResto";
import CardCarte from "./CardCarte";
import Menu from "./Menu";

export class Resto extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allMenu: [1, 2, 3],
      allCard: [1, 2, 3, 4, 5, 6, 7, 8],
      allPlat: [1, 2, 3, 4, 5, 6, 7, 8]
    };
  }
  render() {
    const {
      match: { params }
    } = this.props;

    let menus = this.state.allMenu.map((resto, index) => (
      <Grid item xs={12}>
        <Menu key={index} id={index} />
      </Grid>
    ));

    return (
      <div>
        <Fragment>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <ContentResto {...this.props} />
            </Grid>
            <Grid item xs={12}>
              <CardCarte />
            </Grid>
            {menus}
          </Grid>
        </Fragment>
      </div>
    );
  }
}

export default Resto;
