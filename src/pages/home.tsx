import React from 'react';

const Counter = React.lazy(() => import('../components/counter'));

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="App">
          <Counter />
        </div>
      </div>
      <Counter />
    </>
  );
};

export { Home };
