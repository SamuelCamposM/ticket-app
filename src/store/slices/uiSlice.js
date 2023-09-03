import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  ocultarMenu: true,
};
export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    onSliToggleOcultarMenu: (state /* action */) => {
      state.ocultarMenu = !state.ocultarMenu;
    },
    onSliShowMenu: (state /* action */) => {
      state.ocultarMenu = false;
    },
    onSliHideMenu: (state /* action */) => {
      state.ocultarMenu = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onSliToggleOcultarMenu, onSliShowMenu, onSliHideMenu } =
  uiSlice.actions;
