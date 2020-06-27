import React, { useState, useEffect, useContext } from "react";
import { Grid, Button } from "@material-ui/core";
import FavoriteContext from "../Context/FavoriteContext";
import ApiKey from "../App"
// import Favorites from './Favorites'

const apiKey = ApiKey;

export default function Container(props) {
  const [data, setData] = useState([{}]);
  const [next, askNext] = useState(1);

  const [favorites, setFavorites] = useContext(FavoriteContext);
  const addFavorite = (e) => {
    setFavorites([
      ...favorites,
      {
        id: favorites.length,
        name: e.original_title,
        poster_path: e.poster_path,
      },
    ]);
  };

  const fetchNewPage = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=` +
        apiKey +
        "&page=" +
        next
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setData([...data, ...response.results]);
      })
      .catch(console.log);
  };

  const searchUserMovie = () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=` +
        apiKey +
        "&query=" +
        props.search +
        "&page=" +
        next
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setData([data, ...response.results]);
      })
      .catch(console.log);
  };

  useEffect(() => {
    fetchNewPage();
  }, [next]);

  const askData = () => {
    askNext(next + 1);
  };

  useEffect(() => {
    searchUserMovie();
  }, [props.search]);

  return (
    <div>
      <Grid container justify="center">
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <Grid container justify="space-around">
            {data.slice(1).map((item) => (
              <div
                className="movieElement"
                key={item.id}
                onClick={() => addFavorite(item)}
              >
                <img
                  src={"http://image.tmdb.org/t/p/w185/" + item.poster_path}
                  alt=""
                  onClick={console.log("hehe c'est si")}
                />
                <div>
                  <div>
                    {item.title}
                    <div>
                      {/* star icon */}
                      {/* rating */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
      <Button
        onClick={askData}
        variant="contained"
        color="secondary"
        size="medium"
        style={{ height: "50px", marginBottom: "3%" }}
      >
        MORE
      </Button>
    </div>
  );
}
