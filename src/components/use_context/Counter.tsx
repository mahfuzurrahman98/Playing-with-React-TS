import { FC } from 'react';
import { useCounter } from './CounterContext';

const Counter: FC = () => {
  const { counter } = useCounter();

  return <div className="text-3xl"> {counter}</div>;
};

export default Counter;
