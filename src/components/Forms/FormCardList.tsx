import { DataFormCard } from 'types/types';
import { FormCard } from './FormCard';

interface IFormCardListProps {
  items: DataFormCard[];
  deleteCard: (id: number) => void;
}
export const FormCardList: React.FC<IFormCardListProps> = (props) => {
  const { items, deleteCard } = props;
  return (
    <div className="container-form-card">
      {items.map((list) => (
        <FormCard key={list.id} {...list} deleteCard={deleteCard} />
      ))}
    </div>
  );
};
