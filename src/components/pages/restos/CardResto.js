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
  let restoCrypt = btoa(JSON.stringify(props.restaurant))
  return (
    <Card className={classes.card}>
      <CardActionArea component={Link} to={"/resto/" + restoCrypt} >
        <CardHeader
          avatar={<Restaurant color="primary" />}
          classes={{ title: classes.title }}
          title={props.restaurant.nom}
          subheader={props.restaurant.adresse + " / " + props.restaurant.telephone} />
        <CardMedia
          className={classes.media}
          image={props.restaurant.image}
          title="Resto"
        />
        <CardContent>
          <Typography component="p">
            {props.restaurant.description}
          </Typography>
          <Chip
            icon={<LocalDiningRounded />}
            label={props.restaurant.cuisine}
            className={classes.chip}
            color="primary"
          />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" component={Link} to={"/resto/" + restoCrypt}>
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
