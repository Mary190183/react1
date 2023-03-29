import { DataFormCard } from 'types/types';
import { FormCard } from './FormCard';

interface IFormCardListProps {
  items: DataFormCard[];
}
export const FormCardList: React.FC<IFormCardListProps> = (props) => {
  return (
    <div className="container-form-card">
      {props.items.map((list) => (
        <FormCard key={list.id} {...list} />
      ))}
    </div>
  );
};
