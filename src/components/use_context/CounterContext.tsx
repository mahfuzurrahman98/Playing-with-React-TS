import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useReducer,
} from 'react';

type CounterContextType = {
  state: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

type Action = {
  type: 'increment' | 'decrement' | 'reset';
};

const reducer = (state: number, action: Action): number => {
  if (action.type === 'increment') {
    return state + 1;
  } else if (action.type === 'decrement') {
    return state - 1;
  } else if (action.type === 'reset') {
    return initialCount;
  } else {
    return state;
  }
};

const initialCount: number = 0;

const CounterContext = createContext<CounterContextType | undefined>(undefined);

export const CounterProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialCount);
  const increment = () => dispatch({ type: 'increment' });
  const decrement = () => dispatch({ type: 'decrement' });
  const reset = () => dispatch({ type: 'reset' });

  const contextValue: CounterContextType = {
    state,
    increment,
    decrement,
    reset,
  };

  return (
    <CounterContext.Provider value={contextValue}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = (): CounterContextType => {
  const context = useContext(CounterContext);

  if (!context) {
    throw new Error('useCounter must be used within a CounterProvider');
  }

  return context;
};
