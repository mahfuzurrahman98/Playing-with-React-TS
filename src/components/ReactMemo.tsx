import { FC, MouseEvent, memo, useState } from 'react';

/**
 * ReactMemo is a functional component that renders a counter and a button.
 *
 * @return {void}
 */

/*
Explanation: This code defines a React functional component called ReactMemo that renders a counter and a button. It uses the useState hook to manage the state of the counter. When the button is clicked, the handleCount function is called, which updates the counter state and logs the new count value. The component also logs a message when it is rendered. The JSX code inside the return statement defines the structure and appearance of the rendered component.
*/
const ReactMemo: FC = () => {
  const [count, setCount] = useState(0);

  const handleCount = (event: MouseEvent<HTMLButtonElement>): void => {
    setCount((prevCount) => prevCount + 1);
    console.log('Count changed to: ', count + 1);
  };

  console.log('Main component rendered.');
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
      <MemoedMessage countValue={0} />
    </div>
  );
};

type MessageProps = {
  countValue: number;
};

/**
 * Renders a Message component with a count value.
 *
 * @param {MessageProps} countValue - The count value for the Message component.
 * @return {ReactElement} The rendered Message component.
 */

/*
Explanation: This code defines a Message component in TypeScript, which renders a div element with a count value. When the div is clicked, the background color changes between yellow and red. The count value determines the initial background color. The component also logs the count value when it is rendered.
*/

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

/*
Final thoughts:
---------------
In the provided code, the Message component is memoized using the React.memo function. This means that when the MemoedMessage component is called with a static countValue from the parent component, it becomes a part of the ReactMemo component. It will not be re-rendered every time the ReactMemo component is rendered as long as the countValue remains the same.

However, when the countValue is passed as a dynamic value, the MemoedMessage component will be re-rendered every time the parent component is rendered, even if there are no changes in other parts of the component. This ensures that the MemoedMessage component reflects the updated countValue accurately.

By memoizing the Message component, unnecessary re-renders can be avoided when the countValue doesn't change, optimizing the performance of the application.
*/
