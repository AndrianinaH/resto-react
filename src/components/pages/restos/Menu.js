import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { cyan, grey } from "@material-ui/core/colors";
import { Restaurant, ShoppingBasket } from "@material-ui/icons";
import { Link } from "react-router-dom";

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
    margin: theme.spacing.unit
  },
  avatar: {
    margin: 10,
    fontSize: 50,
    align: "center",
    backgroundColor: cyan[700]
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  }
});

//------------- get data
let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9)
];

function Menu(props) {
  const { classes, id } = props;
  return (
    <Paper className="papers">
      <Grid container justify="center" alignItems="center">
        <Grid item>
          <Avatar className={classes.avatar}>
            <Restaurant />
          </Avatar>
        </Grid>
        <Grid item>
          <Typography
            variant="h6"
            color="primary"
            align="center"
            component="h2"
          >
            Menu Gastronomique {id}
          </Typography>
        </Grid>
      </Grid>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Nom</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Prix</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>Image</TableCell>
              <TableCell>Plat</TableCell>
              <TableCell>Super Resto</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.calories}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Grid container justify="center" alignItems="center">
        <Grid item>
          <Fab
            variant="extended"
            aria-label="Add"
            color="primary"
            className={classes.fab}
          >
            <ShoppingBasket className={classes.extendedIcon} /> Ajouter à la
            commande
          </Fab>
        </Grid>
      </Grid>
    </Paper>
  );
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Menu);
