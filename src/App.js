import React from 'react';
import { useCounter } from './store/hooks';
import useInput from './useInput';

const App = () => {
  const { count, increment } = useCounter();
  const attrs = useInput('');

  return (
    <div>
       <p>{ count }</p>
      <button onClick={increment}>+</button>
      <p>input value: { attrs.value }</p>
      <input type="text" { ...attrs } />
    </div>
  )
}

export default App;