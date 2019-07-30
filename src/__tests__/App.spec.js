import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
    useSelector: () => 4,
    useDispatch: () => mockDispatch
}));

describe('Appコンポーネント', () => {

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('Redux Hooks', () => {
    const component = mount(<App />);

    component.find('button').simulate('click');
    expect(mockDispatch).toBeCalled();
  })
});
