import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, hideCounter: false };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    toggle(state) {
      state.hideCounter = !state.hideCounter;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrementBy10(state, action) {
      state.counter = state.counter - action.payload;
    },
  },
});

const initialAuthState = {
    isAutenticated: false
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAutenticated = true;
    },
    logout(state) {
      state.isAutenticated = false;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
