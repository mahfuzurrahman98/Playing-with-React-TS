import { FC } from 'react';
import { useCounter } from './CounterContext';

const ResetButton: FC = () => {
  const { reset } = useCounter();

  return (
    <button
      className="bg-green-500 hover:bg-green-600 text-white font-bold text-3xl py-0 px-1 rounded"
      title="reset"
      onClick={reset}
    >
      @
    </button>
  );
};

export default ResetButton;
