import { FormDate } from '../components/Forms/FormDate';
import { ButtonForm } from '../components/Forms/ButtonForm';
import FormTitle from '../components/Forms/FormTitle';
import FormSelect from '../components/Forms/FormSelect';
import FormFile from '../components/Forms/FormFile';
import FormRadio from '../components/Forms/FormRadio';
import FormCheckbox from '../components/Forms/FormCheckbox';
import { FormCardList } from '../components/Forms/FormCardList';
import { DataFormCard } from 'types/types';
import React, { createRef, useEffect, useRef, useState } from 'react';

import data from '../data/radio.json';
import { useForm } from 'react-hook-form';

const Recycle: React.FC = () => {
  const [cardList, setCardList] = useState<DataFormCard[]>([]);
  const [valueTitle, setValueTitle] = useState('');
  const handleChangeTitle: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValueTitle(e.target.value);
  };

  const [valueDate, setValueDate] = useState('');
  const handleChangeDate: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValueDate(e.target.value);
  };
  const [valueFile, setValueFile] = useState('');
  const handleChangeFile: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValueFile(e.target.value);
  };
  const [valueSelect, setValueSelect] = useState('');
  const handleChangeSelect: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setValueSelect(e.target.value);
  };
  const [valueCheck, setValueCheck] = useState(false);
  const handleChangeCheck: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValueCheck(e.target.checked);
  };
  const [valueRadio, setValueRadio] = useState('');
  const handleChangeRadio: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValueRadio(e.target.value);
  };
  const addCard = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (valueTitle && valueDate && valueFile && valueSelect) {
      setCardList([
        ...cardList,
        {
          id: Date.now(),
          title: valueTitle,
          date: valueDate,
          select: valueSelect,
          check: valueCheck,
          file: valueFile.slice(11),
          radio: valueRadio,
        },
      ]);
      setValueTitle('');
      setValueDate('');
      setValueFile('');
      setValueSelect('');
      setValueCheck(false);
      setValueRadio('');
    }
  };

  const deleteCard = (id: number): void => {
    setCardList(cardList.filter((cardList) => cardList.id !== id));
  };

  return (
    <>
      <form className="recycle-container">
        <div className="form-card">
          <div className="form-colomn">
            <h2>Recycling map</h2>
            <span className="error" placeholder="error"></span>
            <FormDate value={valueDate} onChange={handleChangeDate} />
            <FormTitle value={valueTitle} onChange={handleChangeTitle} ref={register} />
            <FormSelect value={valueSelect} onChange={handleChangeSelect} />
            <FormFile value={valueFile} onChange={handleChangeFile} />
            <FormCheckbox checked={valueCheck} onChange={handleChangeCheck} />
          </div>
          <div>
            <h4>Marking:</h4>
            <ul className="recycle__ol_garbage">
              {data.radio.map((radio) => {
                return (
                  <FormRadio
                    key={radio.id}
                    id={radio.id}
                    image={radio.image}
                    name={radio.name}
                    value={valueRadio}
                    onChange={handleChangeRadio}
                  />
                );
              })}
            </ul>
          </div>
        </div>
        <ButtonForm onClick={addCard}></ButtonForm>
      </form>
      <FormCardList deleteCard={deleteCard} items={cardList} />
    </>
  );
};

export { Recycle };
