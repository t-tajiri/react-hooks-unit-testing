import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import action from './store/action';

import useInput from './useInput';

const App = () => {
  const count = useSelector((state) => state.count);

  const dispatch = useDispatch();
  const increment = useCallback(() => dispatch(action.increment()), [dispatch]);

  const attrs = useInput('');

  return (
    <div>
       <p>{ count }</p>
      <IncrementButton onIncrement={ increment } />
      <p>input value: { attrs.value }</p>
      <input type="text" { ...attrs } />
    </div>
  )
}

const IncrementButton = React.memo(({ onIncrement }) => (<button onClick={ onIncrement }>+</button>))

export default App;
