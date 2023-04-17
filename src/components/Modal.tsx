import { useState } from 'react';
import { DataPlant } from '../types/types';

interface ModalProps {
  id: number | null;
  onClose: () => void;
  img: string | null;
  common: string | null;
  latin: string | null;
  family: string | null;
  climate: string | null;
  categories: string | null;
}

export const Modal = ({
  id,
  img,
  common,
  family,
  latin,
  climate,
  categories,
  onClose,
}: ModalProps) => {
  const getCardsList = () => {
    const cardsList = localStorage.getItem(`query-list`) as string;
    try {
      return cardsList ? (JSON.parse(cardsList) as DataPlant[]) : [];
    } catch (err) {
      localStorage.removeItem('query-list');
      return [];
    }
  };

  const card = getCardsList().find((el) => el.id === id) as DataPlant;
  const [isLoaded, setIsLoaded] = useState(false);
  console.log(categories, common, latin, family, climate);
  console.log(card);
  return (
    <div
      data-testid="modal"
      className="modal__wrapper"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      onKeyDown={() => {}}
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
          src={img !== null ? img : ''}
          alt={common !== null ? common : 'alt'}
          onLoad={() => {
            setIsLoaded(true);
          }}
          style={!isLoaded ? { opacity: 0 } : { opacity: 1 }}
        />
        <div>
          <h3>Name: {common}</h3>
          <p>Latin name: {latin}</p>
          <p>Climate: {climate}</p>
          <p>Family: {family}</p>
          <p>Categories: {categories}</p>
        </div>
      </div>
    </div>
  );
};
