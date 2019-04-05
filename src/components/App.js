import React, { Component } from "react";
import Header from "./layouts/Header";
import Router from "./routes/Router";
import { MuiThemeProvider,createMuiTheme,Grid,Paper} from "@material-ui/core";
import { cyan } from "@material-ui/core/colors";
import Commande from "./pages/commandes/Commande";
import "./Style.css";


class App extends Component {
  constructor(props) {
    super(props)
  }
  

  render() {
    const theme = createMuiTheme({
      palette: {
        primary: {
          light: cyan[300],
          main: cyan[500],
          dark: cyan[700],
          contrastText: "#FFF"
        }
      }
    })

    return (
      <MuiThemeProvider theme={theme}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={12} sm={8}>
            {/* navigation des pages */}
            <Paper className="papers" elevation={1}>
              <Router />
            </Paper>
          </Grid>
          <Grid item xs>
            {/* afficher nos commandes */}
            <Commande />
          </Grid>
        </Grid>
      </MuiThemeProvider>
    )
  }
}

export default App;
