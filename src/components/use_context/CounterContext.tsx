import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from 'react';

type CounterContextType = {
  counter: number;
  increment: () => void;
  decrement: () => void;
};

const CounterContext = createContext<CounterContextType | undefined>(undefined);

export const CounterProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter((prevCounter) => prevCounter + 1);
  const decrement = () => setCounter((prevCounter) => prevCounter - 1);

  const contextValue: CounterContextType = {
    counter,
    increment,
    decrement,
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
