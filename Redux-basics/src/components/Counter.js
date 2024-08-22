import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store";
const Counter = () => {
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };
  const dispatch = useDispatch();
  function handleIncrement() {
    dispatch(counterActions.increment());
  }
  function handleIncrease() {
    dispatch(counterActions.increase(10));
  }
  function handleDecrement() {
    dispatch(counterActions.decrement());
  }
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div className="counter">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleIncrease}>Increase by 10</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
