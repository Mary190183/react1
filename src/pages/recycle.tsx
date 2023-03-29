import FormDate from '../components/Forms/FormDate';
import FormTitle from '../components/Forms/FormTitle';
// import FormSelect from '../components/Forms/FormSelect';
// import FormFile from '../components/Forms/FormFile';
// import FormRadio from '../components/Forms/FormRadio';
// import FormCheckbox from '../components/Forms/FormCheckbox';
import { FormCardList } from '../components/Forms/FormCardList';
import { DataFormCard } from 'types/types';
import React, { useState } from 'react';

const ButtonForm = (props: { onClick: React.MouseEventHandler<HTMLButtonElement> }) => {
  return (
    <>
      <button data-testid="button-form" className="button-form" type="submit">
        Submit
      </button>
    </>
  );
};

const Recycle: React.FC = () => {
  const [valueDate, setValueDate] = useState('');
  const [valueRadio, setValueRadio] = useState('');
  const [valueTitle, setValueTitle] = useState('');
  const handleChangeTitle: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValueTitle(e.target.value);
  };
  const [valueSelect, setValueSelect] = useState('');
  const [valueFile, setValueFile] = useState('');
  const [valueCheck, setValueCheck] = useState('');
  const [cardList, setCardList] = useState<DataFormCard[]>([]);
  const addCard = () => {
    if (valueDate && valueCheck && valueFile && valueSelect && valueRadio && valueTitle) {
      setCardList([
        ...cardList,
        {
          id: Date.now(),
          title: '',
          date: '',
          select: '',
          check: '',
          file: '',
          radio: '',
        },
      ]);
      setValueDate('');
      setValueCheck('');
      setValueFile('');
      setValueSelect('');
      setValueTitle('');
      setValueRadio('');
    }
  };

  return (
    <>
      <form className="recycle-container" method="get">
        <div className="form-card">
          <div className="form-colomn">
            <h2>Recycling map</h2>
            <FormDate value={valueDate} onChange={handleChangeTitle} />
            <FormTitle value={valueTitle} onChange={handleChangeTitle} />
            {/* <FormSelect />
            <FormFile />
            <FormCheckbox /> */}
          </div>
          <div>
            {/* <h4>Marking:</h4>
            <ul className="recycle__ol_garbage">
              {data.radio.map((radio) => {
                return (
                  <FormRadio key={radio.id} id={radio.id} image={radio.image} name={radio.name} />
                );
              })}
            </ul> */}
          </div>
        </div>
        <ButtonForm onClick={addCard}></ButtonForm>
      </form>
      <FormCardList items={cardList} />
    </>
  );
};

export { Recycle };
