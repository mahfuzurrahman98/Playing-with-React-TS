import React, { useEffect, useState } from 'react';

type CounterProps = {
  initialCount: number;
};

const LifeCycle: React.FC<CounterProps> = ({ initialCount }) => {
  const [count, setCount] = useState<number>(initialCount);

  useEffect(() => {
    console.log(`Effect 1 - Component mounted - Count: ${count}`);

    return () => {
      console.log(`Cleanup 1 - Component unmounted - Count: ${count}`);
    };
  }, []);

  useEffect(() => {
    console.log(`Effect 2 - Count changed - Count: ${count}`);

    return () => {
      console.log(`Cleanup 2 - Count changed - Count: ${count}`);
    };
  }, [count]);

  useEffect(() => {
    console.log(
      `Effect 3 - Component mounted or Count changed - Count: ${count}`
    );

    return () => {
      console.log(
        `Cleanup 3 - Component unmounted or Count changed - Count: ${count}`
      );
    };
  }, [count]);

  useEffect(() => {
    console.log(`Effect 4 - Count changed - Count: ${count}`);

    return () => {
      console.log(`Cleanup 4 - Count changed - Count: ${count}`);
    };
  });

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Example Component</h2>
      <p className="text-lg mb-2">Count: {count}</p>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={incrementCount}
      >
        Increment Count
      </button>
    </div>
  );
};

export default LifeCycle;
