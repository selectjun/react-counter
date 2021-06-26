import { useRecoilValue } from 'recoil';
import { countState, useCountActions } from './atoms/countState';
import Button from './components/Button';
import './App.css';

function App() {
  const count = useRecoilValue(countState);
  const countActions = useCountActions();

  return (
    <div className="App">
      <h1 id="count">{count}</h1>
      <div className="button-group">
        <Button text="-" className="btn btn-primary" onClick={countActions.descreaseCount} />
        <Button text="+" className="btn btn-danger" onClick={countActions.increaseCount} />
        <br />
        <Button text="Reset" className="btn btn-success" onClick={countActions.resteCount} />
      </div>

    </div>
  );
}

export default App;
