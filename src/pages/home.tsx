import React from 'react';
const Card = React.lazy(() => import('../components/card'));
import data from '../data/plants.json';

const Home = () => {
  return (
    <div className="container container_home">
      <div className="App">
        {data.plants.map((plants) => {
          return (
            <div key={plants.id}>
              <Card
                id={plants.id}
                name={plants.name}
                description={plants.description}
                price={plants.price}
                watches={plants.watches}
                image={plants.image}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { Home };
