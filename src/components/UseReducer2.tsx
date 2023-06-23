import { FC, useReducer, useState } from 'react';

type Task = {
  id: number;
  name: string;
  done: boolean;
};

type State = {
  tasks: Task[];
  message: string;
};

type Action =
  | { type: 'add'; payload: Task }
  | { type: 'remove'; payload: Task }
  | { type: 'done'; payload: Task }
  | { type: 'setMessage'; payload: string };

const initialState: State = {
  tasks: [
    { id: 1, name: 'Task 1', done: false },
    { id: 2, name: 'Task 2', done: true },
    { id: 3, name: 'Task 3', done: false },
  ],
  message: '',
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'add':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        message: `Task "${action.payload.name}" added successfully.`,
      };
    case 'remove':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
        message: `Task "${action.payload.name}" removed successfully.`,
      };
    case 'done':
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
            return { ...task, done: !task.done };
          }
          return task;
        }),
        message: `Task "${action.payload.name}" marked as done.`,
      };
    case 'setMessage':
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};

const UseReducer2: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newTaskName, setNewTaskName] = useState('');

  const addNewTask = () => {
    if (newTaskName.trim() === '') {
      dispatch({ type: 'setMessage', payload: 'Task name cannot be empty.' });
      return;
    }

    const newTask: Task = {
      id: state.tasks.length + 1,
      name: newTaskName,
      done: false,
    };

    dispatch({ type: 'add', payload: newTask });
    setNewTaskName('');
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
          {state.tasks.map((task: Task) => (
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
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
        />
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold text-2xl py-1 px-4 rounded mt-2"
          onClick={addNewTask}
        >
          Add Task
        </button>
      </div>
      <div className="text-center mt-4">
        {state.message && <div className="text-blue-500">{state.message}</div>}
      </div>
    </div>
  );
};

export default UseReducer2;
