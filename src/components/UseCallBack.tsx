import { FC, memo, useCallback, useState } from 'react';

type MessageProps = {
  countValue: number;
  handleClick: () => void;
};

const UseCallBack: FC = () => {
  const [count, setCount] = useState(0);
  const [toggleValue, setToggleValue] = useState(false);

  const incrementCount = useCallback((): void => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const toggleColor = (): void => {
    setToggleValue(!toggleValue);
  };

  console.log('Main component rendered');

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div
        className="p-5 border-2 w-16 h-16 mb-5 cursor-pointer"
        style={{
          backgroundColor: toggleValue ? 'green' : 'red',
          borderRadius: toggleValue ? '' : '50%',
        }}
        onClick={toggleColor}
      ></div>

      <div className="text-center mb-5 bg-gray-300 px-7 py-5 rounded-md">
        <h1 className="text-3xl mb-3">Count: {count}</h1>
        <button
          className="bg-blue-700 hover:bg-blue-600 text-white text-4xl py-1 px-3 rounded"
          onClick={incrementCount}
        >
          +
        </button>
      </div>
      <MemoedMessage countValue={count} handleClick={incrementCount} />
    </div>
  );
};

const Message: FC<MessageProps> = ({ countValue, handleClick }) => {
  console.log(`Message component rendered with count = ${countValue}`);

  return (
    <div className="flex flex-col items-center border-2 border-pink-400 p-3">
      <p className="mb-3">No. of messages: {countValue}</p>
      <button
        className="bg-blue-400 border-2 border-gray-600 px-2 py-[2px] rounded"
        onClick={handleClick}
      >
        Increment
      </button>
    </div>
  );
};

const MemoedMessage = memo(Message);

export default UseCallBack;
