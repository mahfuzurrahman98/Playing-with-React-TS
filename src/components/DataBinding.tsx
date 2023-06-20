import { SetStateAction, useState } from 'react';

const DataBinding = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-xl font-bold mb-4">Two-Way Data Binding</h2>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          className="px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter a value"
        />
        <p className="text-gray-600">Input value: {inputValue}</p>
      </div>
    </div>
  );
};

export default DataBinding;
