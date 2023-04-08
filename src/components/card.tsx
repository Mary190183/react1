import React from 'react';
// import Counter from './Counter/Counter';
import Eye from '../assets/svg/eye.svg';
import Like from '../assets/svg/heart.svg';
import { DataPlant } from '../types/types';

const Card = (props: DataPlant) => {
  return (
    <div className="card" data-testid="card">
      <img className="image" src={props.img} alt={props.common} />
      <div className="card__like_watches">
        <div className="svg">
          <Like />
        </div>
        <div className="eye-count">
          {/* {props.watches} */}
          {/* <Counter /> */}
          <Eye />
        </div>
      </div>
      <div className="card__info_wrapper">
        <h3>Name: {props.common}</h3>
        <div>Latin name: {props.latin}</div>
        <div>Family: {props.family}</div>
        <div>Climate: {props.climate}</div>
      </div>
    </div>
  );
};

export default Card;
