import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions"; //no need to specify file if file name is index

function App() {
  const counter = useSelector((state) => state.counterTrack);
  const isLogged = useSelector((state) => state.isloggedTrack);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Hi</h1>
      <h4>Counter: {counter}</h4>
      {isLogged ? <h4>Valuable info i shouldn't see</h4> : ""}
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(100))}>-</button>
    </div>
  );
}

export default App;
