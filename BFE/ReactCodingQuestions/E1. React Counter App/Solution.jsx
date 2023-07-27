import React, {useState} from 'react'

export function App() {
  const [count, setCounter] = useState(0);
  return (
    <div>
    <button data-testid="decrement-button" 
      onClick={() => setCounter(count => count - 1)}>-</button>
    <button data-testid="increment-button" 
      onClick={() => setCounter(count => count + 1)}>+</button>
    <p>clicked: {count}</p>
    </div>
  )
}

// <button data-testid="decrement-button" 
//    onClick={() => setCounter(count - 1)}>-</button>
// <button data-testid="increment-button" 
//    onClick={() => setCounter(count + 1)}>+</button>
// <p>clicked: {count}</p>

// run your code by clicking the run button on the right