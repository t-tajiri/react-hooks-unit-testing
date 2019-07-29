import React from 'react';
import { shallow } from 'enzyme';

import useInput from '../useInput';

const Wrapper = () =>  {
  const attrs = useInput('hello');
  return (
    <div>
      <span>{attrs.value}</span>
      <input type="text" {...attrs} />
    </div>
  )
}


describe('useInput', () => {
  it('initial value', () => {
    const component = shallow(<Wrapper />);
    
    expect(component.find('span').text()).toEqual('hello');
  });

  it('onChange', () => {
    const component = shallow(<Wrapper />);
    component.find('input').simulate('change', {target: {value: 'input new value'}});

    expect(component.find('span').text()).toEqual('input new value');
  });
});