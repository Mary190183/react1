import React from 'react';
// import Counter from './Counter/Counter';
import Eye from '../../assets/svg/eye.svg';
import Like from '../../assets/svg/heart.svg';
import { DataPlant } from '../../types/types';

export interface CharacterProps extends DataPlant {
  onOpening?: (data: DataPlant) => void;
}

const Card = (data: CharacterProps) => {
  const { onOpening } = data;
  return (
    <div
      className="card"
      data-testid="card"
      onClick={() => {
        if (onOpening) {
          onOpening(data);
        }
      }}
    >
      <div className="image-container">
        <img className="image" src={data.img} alt="gg" />
      </div>
      <div className="card__like_watches">
        <div className="svg">
          <Like />
        </div>
        <div className="eye-count">
          {data.watches}
          {/* <Counter /> */}
          <Eye />
        </div>
      </div>
      <div className="card__info_wrapper">
        <h3>{data.common}</h3>
      </div>
    </div>
  );
};

export default Card;
