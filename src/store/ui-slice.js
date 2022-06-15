import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { cartIsVisible: false, notification: null },
  reducers: {
    showNotification(state, action) {
      state.notification = {status: action.payload.status, title: action.payload.title, message: action.payload.message}
    },
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible ;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
