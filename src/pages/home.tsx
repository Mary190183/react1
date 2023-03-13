import React, { Component } from 'react';

import { Suspense, useState } from 'react';

const Footer = React.lazy(() => import('../components/footer'));
const Counter = React.lazy(() => import('../components/counter'));

const Home = () => {
  return (
    <>
      <div>
        <div className="App">
          <Counter />
        </div>
      </div>
      <Counter />
      <Footer />
    </>
  );
};

export { Home };
