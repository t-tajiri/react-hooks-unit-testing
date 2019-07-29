import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import * as hooks from '../store/hooks';
import App from '../App';


describe('Appコンポーネント', () => {
  const increment = jest.fn();

  sinon.stub(hooks, 'useCounter').returns({
    count: 1,
    increment
  });

  it('Redux Hooks', () => {
    const component = shallow(<App />);

    component.find('button').simulate('click');
    expect(increment).toBeCalled();
  })
});