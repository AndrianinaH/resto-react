import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { cyan, grey } from "@material-ui/core/colors";
import { EventNote} from "@material-ui/icons";
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import {
  Paper,
  Typography,
  Chip,
  Avatar,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemSecondaryAction,
  Divider
} from "@material-ui/core";

const styles = theme => ({
  chip: {
    margin: theme.spacing.unit
  },
  title: {
    color: grey[700],
    fontSize: 20,
    align: "center"
  },
  fab: {
    margin: theme.spacing.unit,
    color: theme.palette.primary.main,
    backgroundColor: '#fff',
  },
  avatar: {
    margin: 10,
    fontSize: 50,
    align: "center",
    backgroundColor: cyan[700]
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
});

//------------- get data

function CardCarte(props) {
  const { classes } = props;
  let menu = Object.keys(props.menu).map((key, index) => {
    let keyMenu = "menu" + index + "-" + props.idResto;
    let el = props.menu[key];
    return <div><ListItem key={index}>
      <ListItemText primary={el.nom} />
      <ListItemSecondaryAction>
        <Chip
          label={el.prix + " MGA"}
          className="chips"
          color="primary" />
        <IconButton>
          <AddCircleIcon onClick={() => props.addCommande(el, keyMenu, props.resto)} />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
      <Divider />
      <ListItem>
        <Avatar src={"https://firebasestorage.googleapis.com/v0/b/my-restaurant-4a5b2.appspot.com/o/" + el.oeuvre.image + "?alt=media"}
          className={classes.bigAvatar} />
        <ListItemText primary={el.oeuvre.nom} secondary={el.oeuvre.description} />
      </ListItem>
      <ListItem>
        <Avatar src={"https://firebasestorage.googleapis.com/v0/b/my-restaurant-4a5b2.appspot.com/o/" + el.plat.image + "?alt=media"}
          className={classes.bigAvatar} />
        <ListItemText primary={el.plat.nom} secondary={el.plat.description} />
      </ListItem>
      <ListItem>
        <Avatar src={"https://firebasestorage.googleapis.com/v0/b/my-restaurant-4a5b2.appspot.com/o/" + el.dessert.image + "?alt=media"}
          className={classes.bigAvatar} />
        <ListItemText primary={el.dessert.nom} secondary={el.dessert.description} />
      </ListItem>
    </div>
  });

  let dessert = Object.keys(props.dessert).map((key, index) => {
    let keyDessert = "dessert" + index + "-" + props.idResto;
    let el = props.dessert[key];
    return <ListItem key={index}>
      <Avatar src={"https://firebasestorage.googleapis.com/v0/b/my-restaurant-4a5b2.appspot.com/o/" + el.image + "?alt=media"}
        className={classes.bigAvatar} />
      <ListItemText primary={el.nom} secondary={el.description} />
      <ListItemSecondaryAction>
        <Chip
          label={el.prix + " MGA"}
          className="chips"
          color="primary" />
        <IconButton>
          <AddCircleIcon onClick={() => props.addCommande(el, keyDessert, props.resto)} />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  });

  let oeuvre = Object.keys(props.oeuvre).map((key, index) => {
    let keyOeuvre = "oeuvre" + index + "-" + props.idResto;
    let el = props.oeuvre[key];
    return <ListItem key={index}>
      <Avatar src={"https://firebasestorage.googleapis.com/v0/b/my-restaurant-4a5b2.appspot.com/o/" + el.image + "?alt=media"}
        className={classes.bigAvatar} />
      <ListItemText primary={el.nom} secondary={el.description} />
      <ListItemSecondaryAction>
        <Chip
          label={el.prix + " MGA"}
          className="chips"
          color="primary" />
        <IconButton>
          <AddCircleIcon onClick={() => props.addCommande(el, keyOeuvre, props.resto)} />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  });

  let plat = Object.keys(props.plat).map((key, index) => {
    let keyPlat = "plat" + index + "-" + props.idResto;
    let el = props.oeuvre[key];
    return <ListItem key={index}>
      <Avatar src={"https://firebasestorage.googleapis.com/v0/b/my-restaurant-4a5b2.appspot.com/o/" + el.image + "?alt=media"}
        className={classes.bigAvatar} />
      <ListItemText primary={el.nom} secondary={el.description} />
      <ListItemSecondaryAction>
        <Chip
          label={el.prix + " MGA"}
          className="chips"
          color="primary" />
        <IconButton>
          <AddCircleIcon onClick={() => props.addCommande(el, keyPlat, props.resto)} />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  });

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
            component="h2">
            Menu Du Jour
          </Typography>
        </Grid>
      </Grid>
      <List component="nav" className={classes.root}>
        {menu}
      </List>
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
            component="h2">
            La Carte
          </Typography>
        </Grid>
      </Grid>
      <List component="nav"
        subheader={<ListSubheader component="div">Nos Hors D'Oeuvres</ListSubheader>}
        className={classes.root}>
        <Divider />
        {oeuvre}
      </List>
      <List component="nav"
        subheader={<ListSubheader component="div">Nos Plats</ListSubheader>}
        className={classes.root}>
        <Divider />
        {plat}
      </List>
      <List component="nav"
        subheader={<ListSubheader component="div">Nos Desserts</ListSubheader>}
        className={classes.root}>
        <Divider />
        {dessert}
      </List>
    </Paper>
  );
}

CardCarte.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CardCarte);
