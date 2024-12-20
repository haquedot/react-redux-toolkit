import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, incrementByAmount, reset } from './features/counter/counterSlice';
import { useState } from 'react';

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();

  const [amount, setAmount] = useState(0);

  const handleIncrement = () => {
    dispatch(increment());
  }

  const handleDecrement = () => {
    dispatch(decrement());

  }

  const handleReset = () => {
    dispatch(reset());
  }

  const handleAmount = () => {
    dispatch(incrementByAmount(amount));
  }

  return (
    <>
      <div className='container'>
        <button onClick={handleIncrement}>
          +
        </button>
        <p>Count: {count} </p>
        <button onClick={handleDecrement}>
          -
        </button>
        <br />
        <br />
        <button onClick={handleReset}>
          Reset
        </button>

        <input
          type='Number'
          value={amount}
          placeholder='Enter amount'
          onChange={(e) => setAmount(e.target.value)}
        />

        <button onClick={handleAmount}>
          Inc by amount
        </button>
      </div>


    </>
  )
}

export default App
