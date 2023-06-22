import { useReducer } from 'react';

type Action = {
  type: 'increment' | 'decrement';
};

const initialCount: number = 0;

const reducer = (state: number, action: Action) => {
  if (action.type === 'increment') {
    return state + 1;
  } else if (action.type === 'decrement') {
    return state - 1;
  } else {
    return state;
  }
};

const UseReducer1: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialCount);

  const increment = () => {
    dispatch({ type: 'increment' });
  };

  const decrement = () => {
    dispatch({ type: 'decrement' });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">UseReducer1</h1>
      <div className="flex items-center space-x-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold text-3xl py-0 px-2 rounded"
          onClick={decrement}
        >
          -
        </button>
        <span className="text-2xl font-bold">{state}</span>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold text-3xl py-0 px-2 rounded"
          onClick={increment}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default UseReducer1;
