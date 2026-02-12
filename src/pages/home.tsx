import React from 'react';
import Card from '../components/card';
import data from '../data/plants.json';

const Home = () => {
  return (
    <section id="home" className="container_home" data-testid="home">
      {data.plants.map((plants) => {
        return (
          <Card
            key={plants.id}
            id={plants.id}
            name={plants.name}
            description={plants.description}
            price={plants.price}
            watches={plants.watches}
            image={plants.image}
          />
        );
      })}
    </section>
  );
};

export { Home };
