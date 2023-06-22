import { FC, useReducer } from 'react';

type Task = {
  id: number;
  name: string;
  done: boolean;
};

type Action = {
  type: 'add' | 'remove' | 'done';
  payload: Task;
};

const initialTasks: Task[] = [
  { id: 1, name: 'Task 1', done: false },
  { id: 2, name: 'Task 2', done: true },
  { id: 3, name: 'Task 3', done: false },
];

const reducer = (state: Task[], action: Action) => {
  if (action.type === 'add') {
    return [...state, action.payload];
  } else if (action.type === 'remove') {
    return state.filter((task) => task.id !== action.payload.id);
  } else if (action.type === 'done') {
    return state.map((task) => {
      if (task.id === action.payload.id) {
        return { ...task, done: !task.done };
      }
      return task;
    });
  }
  return state;
};

const UseReducer2: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialTasks);

  const addNewTask = (name: string) => {
    const newTask: Task = {
      id: state.length + 1,
      name,
      done: false,
    };

    dispatch({ type: 'add', payload: newTask });
  };

  const removeTask = (task: Task) => {
    dispatch({ type: 'remove', payload: task });
  };

  const doneTask = (task: Task) => {
    dispatch({ type: 'done', payload: task });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Tasks</h1>
      <div className="flex items-center space-x-4">
        <ul>
          {state.map((task: Task) => (
            <li className="flex gap-x-4" key={task.id}>
              <span className={task.done ? 'line-through' : ''}>
                {task.name}
              </span>

              {!task.done && (
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold text-3xl py-0 px-2 rounded"
                  onClick={() => doneTask(task)}
                >
                  done
                </button>
              )}

              <span>
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold text-3xl py-0 px-2 rounded"
                  onClick={() => removeTask(task)}
                >
                  remove
                </button>
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col items-center mt-4">
        <input
          type="text"
          placeholder="New Task Name"
          className="border border-gray-300 rounded px-2 py-1"
        />
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold text-2xl py-1 px-4 rounded mt-2"
          onClick={() => addNewTask('New Task')}
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default UseReducer2;
