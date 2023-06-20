import { useState } from 'react';
type Item = {
  id: number;
  name: string;
};

interface Props {
  initialItems: Item[];
}

function ListGroup({ initialItems }: Props) {
  const [items, setItems] = useState(initialItems);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const addNewItem = () => {
    let curLen = items.length;
    let newItem: Item = {
      id: curLen + 1,
      name: `Item ${curLen + 1}`,
    };
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const clickedItem = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    let target = e.target as HTMLLIElement;

    let id = parseInt(target.getAttribute('data-id')!);
    let item = items.find((item) => item.id === id);
    setSelectedItem(item || null);
  };

  return (
    <div className="px-5 pt-5">
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
              className={item.id === selectedItem?.id ? 'bg-gray-300' : ''}
              key={item.id}
              data-id={item.id}
              onClick={clickedItem}
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
