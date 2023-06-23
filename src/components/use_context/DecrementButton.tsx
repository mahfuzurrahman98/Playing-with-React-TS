import { FC } from 'react';
import { useCounter } from './CounterContext';

const DecrementButton: FC = () => {
  const { decrement } = useCounter();

  return (
    <button
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold text-3xl py-0 px-3 rounded"
      onClick={decrement}
    >
      -
    </button>
  );
};

export default DecrementButton;
