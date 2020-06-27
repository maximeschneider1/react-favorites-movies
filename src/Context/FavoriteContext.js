import React,  { useState, useEffect, useContext } from 'react'

export const FavoriteContext = React.createContext();

export const FavoriteProvider = (props) => {
    const [favorites, setFavorites ] = useState([])
    return (
        <FavoriteContext.Provider value={[favorites, setFavorites]}>
            {props.children}
        </FavoriteContext.Provider>
    )
}

export default FavoriteContext
