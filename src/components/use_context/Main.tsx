import { FC } from 'react';
import Counter from './Counter';
import { CounterProvider } from './CounterContext';
import DecrementButton from './DecrementButton';
import IncrementButton from './IncrementButton';

const Main: FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h3 className="mb-5 border-b-4 border-blue-600 px-3">
        Counter using React Context
      </h3>
      <CounterProvider>
        <div className="flex gap-x-5">
          <DecrementButton />
          <Counter />
          <IncrementButton />
        </div>
      </CounterProvider>
    </div>
  );
};

export default Main;
