import { useState } from 'react';
import { DataPlant } from '../types/types';

interface ModalProps extends DataPlant {
  onClose: () => void;
}

export const Modal = (props: ModalProps) => {
  const { onClose } = props;
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div
      data-testid="modal"
      className="modal__wrapper"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="modal__card">
        <button
          className="modal__close-button"
          onClick={() => {
            onClose();
          }}
        >
          X
        </button>
        <div className="modal__wrap">
          <img
            className="modal__img"
            src={props.img}
            alt={props.common !== null ? props.common : 'alt'}
            onLoad={() => {
              setIsLoaded(true);
            }}
            style={!isLoaded ? { opacity: 0 } : { opacity: 1 }}
          />
          <div className="modal__info">
            <h3>Name: {props.common}</h3>
            <p>
              <u>Latin name</u>: {props.latin}
            </p>
            <p>
              <u>Family</u>: {props.family}
            </p>
            <p>
              <u>Watering</u>: {props.watering}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
