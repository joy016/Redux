import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    incrementCounter: (state) => {
      return { counter: state.counter + 1, showCounter: state.showCounter };
    },
    decrementCounter: (state) => {
      return { counter: state.counter - 1, showCounter: state.showCounter };
    },
    toggleCounter: (state) => {
      return { ...state, showCounter: !state.showCounter };
    },
  },
});

const authSlice = createSlice({
  name: "auth",
  initialState: { isAuth: false },
  reducers: {
    isLogin: (state) => {
      return { isAuth: true };
    },
    isLoggedOut: (state) => {
      return { isAuth: false };
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const { incrementCounter, decrementCounter, toggleCounter } =
  counterSlice.actions;

export const { isLogin, isLoggedOut } = authSlice.actions;

export default store;
