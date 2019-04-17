import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { cyan, grey } from "@material-ui/core/colors";
import { EventNote, ShoppingBasket } from "@material-ui/icons";

import {
  Paper,
  Button,
  Typography,
  Chip,
  Avatar,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Fab
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
  }
});

//------------- get data

function CardCarte(props) {
  const { classes } = props;
  
  let carte = Object.keys(props.carte).map((key, index) => {
    let el = props.carte[key];
    let keyCarte = "carte" + index;
    return <TableRow key= {keyCarte}>
      <TableCell>{el.photo}</TableCell>
      <TableCell>{el.nom}</TableCell>
      <TableCell>{el.description}</TableCell>
      <TableCell>{el.prix} Ar</TableCell>
      <TableCell>
        <Fab aria-label="Add" className={classes.fab} onClick={() => props.addCommande(el, index)}>
          <ShoppingBasket />
        </Fab>
      </TableCell>
    </TableRow>
  })
  
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
            La carte
          </Typography>
        </Grid>
      </Grid>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell>Nom</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Prix</TableCell>
            <TableCell>Commander</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {carte}
        </TableBody>
      </Table>
    </Paper>
  );
}

CardCarte.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CardCarte);
