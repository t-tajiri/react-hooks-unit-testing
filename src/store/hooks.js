import { useDispatch, useSelector } from "react-redux";
import action from './action';

export const useCounter = () => {
  const dispatch = useDispatch();
  const counterSelector = (state) => ({
    count: state.count,
  })

  return {
    ...useSelector(counterSelector),
    increment: () => dispatch(action.increment())
  };
}