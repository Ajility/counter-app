import { Helmet } from "react-helmet-async";
import useCounter from "../hooks/useCounter";

const Counter = () => {
  const {
    state,
    incrementHandler,
    decrementHandler,
    resetHandler,
    inputHandler,
    setValueHandler,
  } = useCounter();
  return (
    <div>
      <Helmet>
        <title>Theodora | Counter App</title>
        <meta
          name="description"
          content="Welcome! this is my counter app project"
        />
        <link rel="canonical" href="counter" />
      </Helmet>
      <h1>
        Counter: <span>{state.count}</span>
      </h1>
      <div>
        <button onClick={incrementHandler}>+</button>
        <button onClick={resetHandler}>Reset</button>
        <button onClick={decrementHandler}>-</button>
      </div>
      <div>
        <input
          type="number"
          placeholder="0"
          value={state.input}
          onChange={inputHandler}
        />
        <button onClick={setValueHandler}>Set value</button>
      </div>
    </div>
  );
};

export default Counter;
