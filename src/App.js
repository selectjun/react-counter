import logo from './logo.svg';
import './App.css';
import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DESCREASE":
      return state - 1;
    default:
      return state;
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, 0);

  const onIncrease = () => {
    dispatch({ type: "INCREASE" });
  };

  const onDescrease = () => {
    dispatch({ type: "DESCREASE" });
  };

  return (
    <div className="App">
      <h1 id="count">{count}</h1>
      <div className="button-group">
        <button onClick={onDescrease}>-</button>
        <button onClick={onIncrease}>+</button>
      </div>

    </div>
  );
}

export default App;
