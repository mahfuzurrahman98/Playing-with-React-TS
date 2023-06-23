import { FC } from 'react';
import { useCounter } from './CounterContext';

const IncrementButton: FC = () => {
  const { increment } = useCounter();

  return (
    <button
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold text-3xl py-0 px-2 rounded"
      onClick={increment}
    >
      +
    </button>
  );
};

export default IncrementButton;
