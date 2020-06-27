import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./Components/Home";
import FavoriteBasket from "./Components/FavoriteBasket"
import { FavoriteProvider } from './Context/FavoriteContext'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
// import { ThemeProvider } from '@material-ui/core';

export const ApiKey = "xxxxxxxxxxxx";

function App({ state }) {
  var [search, askSearch] = useState("");

  const myCallback = (dataFromChild) => {
    askSearch(dataFromChild)
  }

  useEffect(() => {
  }, [search]);

  return (
    <div className="App">
      {/* <ThemeProvider theme={favorites}> */}
      <FavoriteProvider >
        <Router>
        <Route exact path='/' component={Home} />
        <Route path='/Favorites' render={() => <FavoriteBasket/>} />
        </Router>
        </FavoriteProvider>
      {/* </ThemeProvider> */}
    </div>
  );
}
export default App;
