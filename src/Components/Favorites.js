import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import FavoriteContext from "../Context/FavoriteContext";

export default function Favorites(props) {
  const [favorites, setFavorites] = useContext(FavoriteContext);

  const favoriteDelete = (e) => {
    setFavorites(favorites.filter((item) => item.name !== e.name));
  };

  return (
    <div>
      {favorites.map((thing) => (
        <div className="favorite-panel">
          <img
            alt="film-cover"
            src={"http://image.tmdb.org/t/p/w185" + thing.poster_path}/>
          <h4 key={thing.id}>
            {thing.name}
          </h4>
          <Button onClick={() => favoriteDelete(thing)} variant="contained" color="secondary" size="medium" style={{height: '50px'}}>Remove</Button>
        </div>
      ))}
    </div>
  );
}
