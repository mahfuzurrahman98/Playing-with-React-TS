import { FC, memo, useCallback, useState } from 'react';

type TodosProps = {
  todos: string[];
  addTodo: () => void;
};

const UseCallBack: FC = () => {
  console.log('Counter component rendered');
  const [count, setCount] = useState<number>(0);
  const [todos, setTodos] = useState<string[]>([]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = useCallback(() => {
    setTodos((prevTodos) => [...prevTodos, `Todo ${prevTodos.length + 1}`]);
  }, [todos]);

  return (
    <div className="flex flex-col items-center">
      <div className="text-center mt-3">
        <h2 className="text-2xl mb-4">Count: {count}</h2>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
          onClick={increment}
        >
          +
        </button>
      </div>
      <hr className="my-4 w-1/2" />
      <Todos todos={todos} addTodo={addTodo} />
    </div>
  );
};

const Todos: FC<TodosProps> = memo(({ todos, addTodo }) => {
  console.log('Todo component rendered');
  return (
    <div className="text-center">
      <h2 className="text-2xl mb-4">My Todos</h2>
      <ul className="list-item">
        {todos.map((todo, index) => (
          <li className="mb-4" key={index}>
            {todo}
          </li>
        ))}
      </ul>
      <button
        className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded"
        onClick={addTodo}
      >
        Add Todo
      </button>
    </div>
  );
});

export default UseCallBack;

/*
The useCallback hook is used to optimize performance by memoizing a function instance and preventing unnecessary re-rendering of components that rely on that function.

In the given example, the addTodo function is defined within the UseCallBack component and passed down to the Todos component as a prop. Without optimization, every time the UseCallBack component re-renders, a new instance of the addTodo function would be created, causing the Todos component to re-render as well.

To avoid this unnecessary re-rendering, we can use the useCallback hook. By wrapping the addTodo function with useCallback, we ensure that the function instance remains the same unless its dependencies change. In this case, the dependency is the todos array.

By specifying [todos] as the dependency array, the addTodo function will only be re-created if the todos array changes. Otherwise, the same memoized function instance will be reused.

This optimization is particularly useful when passing callbacks down to child components. In the given example, the addTodo function is memoized using useCallback, preventing the Todos component from re-rendering unnecessarily when the UseCallBack component renders.

Overall, the useCallback hook helps to improve performance by memoizing functions and controlling when they are recreated. It's a valuable tool when dealing with expensive operations or passing callbacks to child components, ensuring efficient rendering and minimizing unnecessary re-renders.
*/
