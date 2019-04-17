import React, { Component } from "react";
import Header from "./layouts/Header";
import Router from "./routes/Router";
import {
  MuiThemeProvider,
  createMuiTheme,
  Grid,
} from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import { cyan, red } from "@material-ui/core/colors";
import "./Style.css";

class App extends Component {

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
          light: red[400],
          main: red[600],
          dark: red[800],
          contrastText: "#FFF"
        },
      }
    });

    return (
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Header />
            </Grid>
            <Grid item xs={12}>
              {/* navigation des pages */}
              <Router />
            </Grid>
          </Grid>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
