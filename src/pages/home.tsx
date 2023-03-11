import { useState } from 'react';

const Home = () => {
  const [count, setCount] = useState(0);
  return (
    <form action="" className="red">
      <div>
        <div className="App">
          <button onClick={() => setCount((count) => count + 1)}> count is {count} </button>
        </div>
      </div>
    </form>
  );
};

export { Home };
