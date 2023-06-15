import ListGroup from './components/ListGroup';

function App() {
  type Item = {
    id: number;
    name: string;
  };
  const initialItems: Item[] = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];
  return (
    <div className="flex flex-col justify-center">
      <ListGroup initialItems={initialItems} heading="Item List" />
    </div>
  );
}

export default App;
