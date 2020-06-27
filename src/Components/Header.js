import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Favorite from "@material-ui/icons/Favorite";
import { makeStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import { Grid } from "@material-ui/core";
import FavoriteContext from "../Context/FavoriteContext"
import { Link } from "react-router-dom";


const useStyle = makeStyles(() => ({
  componentsStyle: {
    marginTop: "10px",
    color: "red",
  },
  style: {
    color: "red",
  },
}));

export default function Header(props) {
  // const classes = useStyle();
  const [favorites] = useContext(FavoriteContext)

  const handleUserSearch = (s) => {
    props.callback(s.target.value);
  };

  return (
    <React.Fragment>
      <AppBar position="static" className="myAppBar" color="secondary">
        <Toolbar>
          <Grid container>
            <Grid item xs={1} />
            <h2>
            <Link to={`/`}>
            MOVIE LIFE
            </Link>
            </h2>
            <Grid item xs={5} />
            <TextField
              placeholder="Recherchez"
              InputProps={{
                style: {
                  color: "white",
                  paddingTop: "10%" 
                },
              }}
              onChange={handleUserSearch}
            ></TextField>
            <Grid item xs={2} />
            <Button>
            <Link to={`/Favorites`}>
            ({favorites.length})
              <Favorite></Favorite>
              </Link>
            </Button>
            <Grid item xs={1} />
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
