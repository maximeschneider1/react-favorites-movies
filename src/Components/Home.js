import React, { useState, useEffect } from "react";
import "../App.css";
import Header from "./Header";
import Container from "./Container";
import { Grid } from "@material-ui/core";


function Home({ state }) {
  var [search, askSearch] = useState("");

  const myCallback = (dataFromChild) => {
    askSearch(dataFromChild)
  }

  useEffect(() => {
  }, [search]);

  return (
    <div className="Home">
          <Grid container direction="column">
            <Grid>
              <Header callback={myCallback}></Header>
            </Grid>
            <Grid>
              <Container search={search}></Container>
            </Grid>
          </Grid>
    </div>
  );
}
export default Home;
