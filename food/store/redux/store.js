import { configureStore } from "@reduxjs/toolkit";
import favoriteSlice from "./favoriteSlice";

export const store = configureStore({
  reducer: {
    favoriteFoods: favoriteSlice,
  },
});
