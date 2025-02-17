import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";

import { counterActions } from "../store/index";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.hideCounter);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(counterActions.increment());
  };
  const handleDecrese = () => {
    dispatch(counterActions.decrement());
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  const handleIncrement = () => {
    dispatch(counterActions.increase(10));
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrementBy10(10));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {!show && <div className={classes.value}> {counter} </div>}

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <div>
        <button onClick={handleIncrement}>Increment by 10</button>
        <button onClick={handleIncrease}>increase</button>
        <button onClick={handleDecrese}>decrease</button>
        <button onClick={handleDecrement}>Increment by 10</button>
      </div>
    </main>
  );
};

export default Counter;
