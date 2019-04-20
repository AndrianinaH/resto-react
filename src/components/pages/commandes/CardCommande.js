import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Delete } from "@material-ui/icons";
import NumberFormat from 'react-number-format';
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
  TableRow,
  Fab
} from "@material-ui/core";

const styles = theme => ({
  card: {
    minWidth: 275,
    marginRight: 20,
    marginLeft: 10
  },
  fab: {
    margin: theme.spacing.unit,
  },
  title: {
    fontSize: 24
  },
  total: {
    fontSize: 27,
    marginTop: 20
  },
  cash: {
    fontSize: 20,
    marginLeft: 20,
    fontWeight: "bold",
    color: "grey !important"
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

  let prixTotal = 0;

  let commande = Object.keys(props.listCommande).map((key, index) => {
    let el = props.listCommande[key];
    prixTotal += props.listCommande[key].prix;
    return <TableRow key={index}>
      <TableCell>{el.resto}</TableCell>
      <TableCell>{el.nom}</TableCell>
      <TableCell>{el.quantite}</TableCell>
      <TableCell><NumberFormat value={el.prix} displayType={'text'} thousandSeparator={true}/></TableCell>
      <TableCell>
        <Fab aria-label="Delete" color="secondary" className={classes.fab} onClick={() => props.removeCommande(key)}> 
          <Delete />
        </Fab>
      </TableCell>
    </TableRow>
  })

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
              <TableCell>Quantité</TableCell>
              <TableCell>Prix</TableCell>
              <TableCell>-</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {commande}
          </TableBody>
        </Table>
        <Typography align="right" className={classes.total} color="primary">
          Total <span className={classes.cash}><NumberFormat value={prixTotal} displayType={'text'} thousandSeparator={true}/> MGA</span>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default withStyles(styles)(CardCommande);
