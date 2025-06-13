// components/Counter.jsx
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/counterSlice.jsx';
import '../styles/Counter.css'

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="counter-container">
      <h2>Counter: {count}</h2>
      <div className="buttons">
        <button onClick={() => dispatch(decrement())}>➖ Decrement</button>
        <button onClick={() => dispatch(increment())}>➕ Increment</button>
      </div>
    </div>
  );
}
