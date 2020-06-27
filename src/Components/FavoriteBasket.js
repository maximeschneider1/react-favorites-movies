import React from "react";
import Header from "./Header";
import Favorites from "./Favorites";
import { Grid } from "@material-ui/core";

export default function FavoriteBasket(props) {
  return (
    <div className="FavoriteBasket">
    <Header></Header>
      <Grid container justify="center">
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <Grid>
            <div>
              <h2>FAVORITE BASKET</h2>
            </div>
            <Favorites></Favorites>
          </Grid>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
      <Grid container direction="column">
        <Grid>
        </Grid>
        <Grid></Grid>
      </Grid>
    </div>
  );
}
