import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Card,CardActions,CardContent,CardMedia,CardHeader,Button,Typography} from '@material-ui/core';

const styles = {
  card: {
    minWidth: 275,
    marginRight:20
  },
  title: {
    fontSize: 24,
  },
};

function CardCommande(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Vos commandes
        </Typography>
      </CardContent>
    </Card>
  );
}



export default withStyles(styles)(CardCommande);