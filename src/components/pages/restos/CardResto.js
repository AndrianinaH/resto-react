import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { LocalDiningRounded, Restaurant } from "@material-ui/icons";
import { Link } from "react-router-dom";

import {
  Card,
  CardActionArea,
  CardActions,
  CardHeader,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Chip
} from "@material-ui/core";

const styles = theme => ({
  card: {
    margin: 15
  },
  media: {
    height: 250
  },
  chip: {
    margin: theme.spacing.unit
  },
  title: {
    color: theme.palette.primary.main
  }
});

function CardResto(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea component={Link} to="/resto/1" >
        <CardHeader
          avatar={<Restaurant color="primary" />}
          classes={{
            title: classes.title
          }}
          title="Mon Super Resto"
          subheader="Lot 33 Radama Tana / 032 66 666 66"
        />
        <CardMedia
          className={classes.media}
          image="data:image/jpeg;base64,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"
          title="Resto"
        />
        <CardContent>
          <Typography component="p">
            Description tapahana ra lava lotra tohizana am ...
          </Typography>
          <Chip
            icon={<LocalDiningRounded />}
            label="Cuisine Japonaise"
            className={classes.chip}
            color="primary"
          />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" component={Link} to="/resto/1">
          Detail
        </Button>
      </CardActions>
    </Card>
  );
}

CardResto.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CardResto);
