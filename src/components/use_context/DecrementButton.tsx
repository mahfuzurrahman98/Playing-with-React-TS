import { FC } from 'react';
import { useCounter } from './CounterContext';

const DecrementButton: FC = () => {
  const { decrement } = useCounter();

  return (
    <button
      className="bg-red-500 hover:bg-red-600 text-white font-bold text-3xl py-0 px-3 rounded"
      title="decrement"
      onClick={decrement}
    >
      -
    </button>
  );
};

export default DecrementButton;
