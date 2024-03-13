import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favoriteSlice",
  initialState: { ids: [] },
  reducers: {
    addSliceFavorites: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeSliceFavorites: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export const { addSliceFavorites, removeSliceFavorites } =
  favoriteSlice.actions;
export default favoriteSlice.reducer;
