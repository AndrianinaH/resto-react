import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CardHeader,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core";

const styles = theme => ({
  card: {
    minWidth: 275,
    marginRight: 20
  },
  title: {
    fontSize: 24
  },
  total : {
    fontSize : 27,
    marginTop : 20,
  },
  cash : {
    fontSize : 20,
    marginLeft : 20,
    fontWeight : "bold",
    color : "grey !important"

  },
  table: {}
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

function CardCommande(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="primary">
          Vos commandes
        </Typography>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Resto</TableCell>
              <TableCell>Nom</TableCell>
              <TableCell align="right">Quantité</TableCell>
              <TableCell align="right">Prix</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell align="right">Super Resto</TableCell>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Typography align="right" className={classes.total} color="primary">
          Total <span className={classes.cash}>2000 $</span> 
        </Typography>
        
    
       
      </CardContent>
    </Card>
  );
}

export default withStyles(styles)(CardCommande);
