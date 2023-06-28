// import ListGroup from './components/ListGroup';
// import UseCallBack from './components/UseCallBack';
import ReactMemo from './components/ReactMemo';
// import UseReducer2 from './components/UseReducer2';
// import UseReducer1 from './components/UseReducer1';
// import LifeCycle from './components/LifeCycle';
// import DataBinding from './components/DataBinding';

// import UseMemo from './components/UseMemo';

const App: React.FC = () => {
  // type Item = {
  //   id: number;
  //   name: string;s
  // };
  // const initialItems: Item[] = [
  //   { id: 1, name: 'Item 1' },
  //   { id: 2, name: 'Item 2' },
  //   { id: 3, name: 'Item 3' },
  // ];
  return (
    <div className="flex flex-col justify-center">
      {/* <ListGroup initialItems={initialItems} /> */}

      {/* <DataBinding /> */}

      {/* <LifeCycle initialCount={10} /> */}

      {/* <UseReducer1 /> */}

      {/* <UseReducer2 /> */}

      {/* <Main /> */}

      <ReactMemo />

      {/* <UseCallBack /> */}
      {/* <UseMemo /> */}
    </div>
  );
};

export default App;
