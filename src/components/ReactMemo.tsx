import { FC, MouseEvent, memo, useState } from 'react';

const ReactMemo: FC = () => {
  const [count, setCount] = useState(0);

  const handleCount = (event: MouseEvent<HTMLButtonElement>): void => {
    setCount((prevCount) => prevCount + 1);
    console.log('Count changed to: ', count + 1);
  };

  console.log('ReactMemo component rendered.');
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="text-center mb-5 bg-gray-300 px-3 py-5 rounded-md">
        <h1 className="text-3xl mb-3">Count: {count}</h1>
        <button
          className="bg-blue-700 hover:bg-blue-600 text-white font-bold text-xl py-0 px-2 rounded"
          onClick={handleCount}
        >
          +
        </button>
      </div>
      {/* <Message countValue={count} /> */}
      <MemoedMessage countValue={count} />
    </div>
  );
};

type MessageProps = {
  countValue: number;
};

const Message: FC<MessageProps> = ({ countValue }) => {
  const [bgColor, setBgColor] = useState('yellow');
  const handleColorChange = (event: MouseEvent<HTMLDivElement>): void => {
    setBgColor((prevColor) => (prevColor === 'yellow' ? 'red' : 'yellow'));
    console.log(`Color changed to ${bgColor}`);
  };

  console.log('Message component rendered with count =', countValue);
  return (
    <div
      className="p-5 border-2 border-black w-12 h-12"
      style={{ backgroundColor: countValue % 2 === 1 ? 'yellow' : 'red' }}
      onClick={handleColorChange}
    ></div>
  );
};

const MemoedMessage = memo(Message);

export default ReactMemo;
