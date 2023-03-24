import React from 'react';
const Counter = React.lazy(() => import('./Counter/counter'));
import Eye from '../assets/svg/eye.svg';
import Like from '../assets/svg/heart.svg';
import { DataPlant } from 'types/types';

const Card = (props: DataPlant) => {
  return (
    <div className="card">
      <div className="card__like_watches">
        <div className="svg">
          <Like />
        </div>
        <div className="eye-count">
          {props.watches}
          <Eye />
        </div>
      </div>
      <img className="image" src={props.image} alt={props.name} role="image" />
      <h3>{props.name}</h3>
      <div>{props.description}</div>
      <div>{props.price} $</div>
      <Counter />
    </div>
  );
};

export default Card;
