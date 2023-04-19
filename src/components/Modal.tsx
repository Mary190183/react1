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
        <img
          className="modal__img"
          src={props.img}
          alt={props.common !== null ? props.common : 'alt'}
          onLoad={() => {
            setIsLoaded(true);
          }}
          style={!isLoaded ? { opacity: 0 } : { opacity: 1 }}
        />
        <div>
          <h3>Name: {props.common}</h3>
          <p>Latin name: {props.latin}</p>
          <p>Description: {props.description}</p>
          <p>Categories: {props.categories}</p>
        </div>
      </div>
    </div>
  );
};
