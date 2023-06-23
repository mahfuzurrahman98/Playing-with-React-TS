import { FC } from 'react';
import { useCounter } from './CounterContext';

const Counter: FC = () => {
  const { state } = useCounter();

  return <div className="text-3xl"> {state}</div>;
};

export default Counter;
