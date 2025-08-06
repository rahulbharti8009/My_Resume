import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
  themeColor: {
    textColor: "",
    background: "",
    tineColor: "",
  },
};
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      if (state.theme === "light") {
        state.theme = "dark";
        state.themeColor.textColor = "white";
        state.themeColor.background = "black";
        state.themeColor.tineColor = "";
      } else {
        state.theme = "light";
        state.themeColor.textColor = "black";
        state.themeColor.background = "white";
        state.themeColor.tineColor = "";
      }
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
