import React from 'react';
// import Counter from './Counter/Counter';
import Eye from '../../assets/svg/eye.svg';
import Like from '../../assets/svg/heart.svg';
import { DataPlant } from '../../types/types';

export interface CardProps extends DataPlant {
  onOpening?: (data: DataPlant) => void;
}
const Card = (props: CardProps) => {
  const { onOpening } = props;
  return (
    <div
      className="card"
      data-testid="card"
      onClick={() => {
        if (onOpening) {
          onOpening(props);
        }
      }}
    >
      <div className="image-container">
        <img className="image" src={props.img} alt="gg" />
      </div>
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
        <h3>{props.common}</h3>
      </div>
    </div>
  );
};

export default Card;
