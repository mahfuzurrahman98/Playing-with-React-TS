import { FC, useMemo, useState } from 'react';

type UseMemoProps = {};

const UseMemo: FC<UseMemoProps> = () => {
  console.log('component rendered');
  const [count, setCount] = useState<number>(0);
  const [todos, setTodos] = useState<string[]>([]);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = () => {
    setTodos((t) => [...t, 'New Todo']);
  };

  return (
    <div className="flex flex-col items-center">
      <div>
        <h2 className="text-2xl mb-4">My Todos</h2>
        <ul className="list-disc list-inside mb-4">
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded"
          onClick={addTodo}
        >
          Add Todo
        </button>
      </div>
      <hr className="my-4 w-1/2" />
      <div>
        <h2 className="text-2xl mb-4">Count: {count}</h2>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
          onClick={increment}
        >
          +
        </button>
        <h2 className="text-2xl mt-4">Expensive Calculation</h2>
        <div className="text-xl">{calculation}</div>
      </div>
    </div>
  );
};

const expensiveCalculation = (num: number): number => {
  console.log('Calculating...');
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

export default UseMemo;

/*
The useMemo hook is useful for optimizing the performance of expensive or resource-intensive functions in React components. It allows us to memoize the result of a function and only recalculate it when its dependencies change.

In the given example, there is an expensiveCalculation function that performs a time-consuming operation. Without optimization, this function would be executed on every render of the component, which could result in performance issues.

To address this, we can utilize the useMemo hook. By wrapping the expensiveCalculation function call with useMemo, we can memoize the result of the function and ensure that it is recalculated only when necessary.

The useMemo hook takes two parameters: the function to memoize and an array of dependencies. The dependencies indicate which values the memoized function depends on. If any of the dependencies change, the memoized function will be re-evaluated.

In this example, the expensiveCalculation function is wrapped with useMemo, and its dependency is set to [count]. This means that the function will only be recalculated when the count value changes, and not when todos are added.

By using useMemo, we effectively optimize the performance of the component. Now, when you change the count or add a todo, you will notice that the expensiveCalculation function is only executed when the count changes, resulting in improved performance and responsiveness in the application.

The useMemo hook is a powerful tool for optimizing computations in React components, allowing us to control when expensive functions are re-evaluated based on their dependencies.
*/
