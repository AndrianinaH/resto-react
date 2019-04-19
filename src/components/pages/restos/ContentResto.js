import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { LocalDiningRounded, Call, Room } from "@material-ui/icons";
import { CardMedia, Typography, Chip, Paper } from "@material-ui/core";

const styles = theme => ({
  card: {
    margin: 15
  },
  media: {
    height: 380
  },
  chip: {
    margin: theme.spacing.unit
  },
  title: {
    color: theme.palette.primary.main
  },
});

function ContentResto(props) {
  const { match: { params } } = props;
  const { classes } = props;
  let cuisine = "Cuisine " + props.detail.cuisine;
  let phone = props.detail.telephone;
  let adresse = props.detail.adresse;
  let about = props.detail.description;
  let image = props.detail.image;
  return (
    <Paper className="papers" align="center">
      <Typography variant="h6" color="primary" align="center" component="h2">
        Restaurant
      </Typography>
      <Chip
        icon={<LocalDiningRounded />}
        label={cuisine}
        className="chips"
        color="primary" />
      <Chip
        icon={<Call />}
        label={phone}
        className="chips"
        color="primary" />
      <Chip
        icon={<Room />}
        label={adresse}
        className="chips"
        color="primary" />

      <CardMedia
        className={classes.media}
        image={image}
        title="Contemplative Reptile"
      />
      <br></br>
      <Typography align="center" paragraph>{about}</Typography>
    </Paper>
  );
}

ContentResto.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ContentResto);
