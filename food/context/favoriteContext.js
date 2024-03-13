import { useState, createContext } from "react";

export const FavoriteContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

export default function FavoriteContextProvider({ children }) {
  const [favoriteFoodIds, setFavoriteFoodIds] = useState([]);

  function addFavorite(id) {
    setFavoriteFoodIds((current) => [...current, id]);
  }
  function removeFavorite(id) {
    setFavoriteFoodIds((current) => current.filter((f) => f !== id));
  }

  const value = {
    ids: favoriteFoodIds,
    addFavorite,
    removeFavorite,
  };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
}
