import { useReducer } from 'react';
import Button from './components/Button';
import './App.css';

function reducer(state, action) {
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DESCREASE":
      return state - 1;
    case "RESET":
      return 0;
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

  const onReset = () => {
    dispatch({ type: "RESET" });
  }

  return (
    <div className="App">
      <h1 id="count">{count}</h1>
      <div className="button-group">
        <Button text="-" className="btn btn-primary" onClick={onDescrease} />
        <Button text="+" className="btn btn-danger" onClick={onIncrease} />
        <br />
        <Button text="Reset" className="btn btn-success" onClick={onReset} />
      </div>

    </div>
  );
}

export default App;
