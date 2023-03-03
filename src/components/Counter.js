import { useDispatch, useSelector } from "react-redux";
import {
  incrementCounter,
  decrementCounter,
  toggleCounter,
} from "../store/index";

import classes from "./Counter.module.css";

const Counter = () => {
  const count = useSelector((state) => state.counter.counter);
  const hideCounter = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(toggleCounter());
  };

  const handleIncrement = () => {
    dispatch(incrementCounter());
  };

  const handleDecrement = () => {
    dispatch(decrementCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {hideCounter && <div className={classes.value}>{count}</div>}

      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
