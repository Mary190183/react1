import FormDate from '../components/Forms/FormDate';
import FormTitle from '../components/Forms/FormTitle';
import FormSelect from '../components/Forms/FormSelect';
import FormFile from '../components/Forms/FormFile';
import FormCard from '../components/Forms/FormCard';
import FormCheckbox from '../components/Forms/FormCheckbox';
import data from '../data/radio.json';

const Recycle = () => {
  return (
    <form className="form-card">
      <h2>Recycling map</h2>
      <FormDate />
      <FormTitle />
      <FormSelect />
      <FormFile />
      <ul className='recycle__ol_garbage'>
        {data.radio.map((radio) => {
          return (
            <FormCard key={radio.id}
              id={radio.id}
              image={radio.image}
            />
          );
        })}
      </ul>
      <FormCheckbox />
      <button data-testid="button-form" className='button-form'>Submit</button>
    </form>
  );
};
export { Recycle };
