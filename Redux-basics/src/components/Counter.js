import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };
  const dispatch = useDispatch();
  function handleIncrement() {
    dispatch({ type: "increment" });
  }
  function handleIncrease() {
    dispatch({ type: "increase", amount: 10 });
  }
  function handleDecrement() {
    dispatch({ type: "decrement" });
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
