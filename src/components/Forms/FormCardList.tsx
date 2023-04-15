import { DataFormCard } from '../../types/types';
import { FormCard } from './FormCard';
import React from 'react';

interface IFormCardListProps {
  items: DataFormCard[];
  // deleteCard: (id: number) => void;
}
export const FormCardList: React.FC<IFormCardListProps> = (props) => {
  const { items } = props;
  return (
    <div className="container-form-card" data-testid="container-form-card">
      {items.map((list) => (
        <FormCard key={list.id} {...list} />
      ))}
    </div>
  );
};
