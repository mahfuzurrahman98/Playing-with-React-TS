import { useState } from 'react';
type Item = {
  id: number;
  name: string;
};

interface Props {
  initialItems: Item[];
  heading: string;
}

function ListGroup({ initialItems, heading }: Props) {
  const [items, setItems] = useState(initialItems);

  const addNewItem = () => {
    let curLen = items.length;
    let newItem: Item = {
      id: curLen + 1,
      name: `Item ${curLen + 1}`,
    };
    setItems([...items, newItem]);
  };

  return (
    <div className="px-5">
      <h3>{heading}</h3>
      {items.length === 0 && <p>No items found.</p>}
      <div className="flex gap-x-5">
        <button
          className="px-4 py-1 rounded text-white bg-blue-600"
          onClick={addNewItem}
        >
          Add new
        </button>
        <button
          className="px-4 py-1 rounded text-white bg-red-600"
          onClick={() => {
            setItems([]);
          }}
        >
          Clear
        </button>
      </div>
      {items.length > 0 && (
        <ul className="list-disc">
          {items.map((item) => (
            <li
              key={item.id}
              onClick={() => {
                alert(item.name);
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListGroup;
