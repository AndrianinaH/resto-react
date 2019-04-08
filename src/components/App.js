import React, { Component } from "react";
import Header from "./layouts/Header";
import Router from "./routes/Router";
import {
  MuiThemeProvider,
  createMuiTheme,
  Grid,
  Paper
} from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import { cyan, grey } from "@material-ui/core/colors";
import Commande from "./pages/commandes/Commande";
import "./Style.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const theme = createMuiTheme({
      palette: {
        primary: {
          light: cyan[400],
          main: cyan[700],
          dark: cyan[900],
          contrastText: "#FFF"
        },
        secondary: {
          light: grey[400],
          main: grey[600],
          dark: grey[800],
          contrastText: "#FFF"
        }
      }
    });

    return (
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Header />
            </Grid>
            <Grid item xs={12} md={7} sm={12}>
              {/* navigation des pages */}
              <Router />
            </Grid>
            <Grid item xs>
              {/* afficher nos commandes */}
              <Commande />
            </Grid>
          </Grid>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
