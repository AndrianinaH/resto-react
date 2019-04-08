import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { cyan } from "@material-ui/core/colors";
import { EventNote } from "@material-ui/icons";
import { Link } from "react-router-dom";

import {
  Paper,
  Button,
  Typography,
  Chip,
  Avatar,
  Grid
} from "@material-ui/core";

const styles = theme => ({
  chip: {
    margin: theme.spacing.unit
  },
  title: {
    color: theme.palette.secondary.main,
    fontSize: 20,
    align: "center"
  },
  avatar: {
    margin: 10,
    fontSize: 50,
    align: "center",
    backgroundColor: cyan[700],
  }
});

function CardCarte(props) {
  const { classes } = props;
  return (
    <Paper className="papers">
      <Grid container justify="center" alignItems="center">
        <Grid item>
          <Avatar className={classes.avatar}>
            <EventNote />
          </Avatar>
        </Grid>
        <Grid item>
          <Typography
            variant="h6"
            color="primary"
            align="center"
            component="h2"
          >
            La carte
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

CardCarte.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CardCarte);
