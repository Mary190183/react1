import { FormDate } from '../components/Forms/FormDate';
import { ButtonForm } from '../components/Forms/ButtonForm';
import FormTitle from '../components/Forms/FormTitle';
import FormSelect from '../components/Forms/FormSelect';
import FormFile from '../components/Forms/FormFile';
import FormRadio from '../components/Forms/FormRadio';
import FormCheckbox from '../components/Forms/FormCheckbox';
import { FormCardList } from '../components/Forms/FormCardList';
import { DataFormCard } from '../types/types';
import React, { FC, useState } from 'react';

import data from '../data/radio.json';

const Recycle: FC = () => {
  const [cardList, setCardList] = useState<DataFormCard[]>([]);
  const [valueDate, setValueDate] = useState('');
  const handleChangeDate: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValueDate(e.target.value);
  };
  const [valueTitle, setValueTitle] = useState('');
  const handleChangeTitle: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValueTitle(e.target.value);
  };
  const [valueSelect, setValueSelect] = useState('');
  const handleChangeSelect: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setValueSelect(e.target.value);
  };
  const [valueFile, setValueFile] = useState<File>();
  const handleChangeFile: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.files) {
      setValueFile(e.target.files[0]);
    }
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
    if (valueTitle && valueDate && valueFile && valueSelect && valueRadio && valueFile) {
      setCardList([
        ...cardList,
        {
          id: Date.now(),
          date: valueDate,
          title: valueTitle,
          select: valueSelect,
          file: valueFile,
          check: valueCheck,
          radio: valueRadio,
        },
      ]);
      setValueDate('');
      setValueTitle('');
      setValueSelect('');
      setValueFile('');
      setValueCheck(false);
      setValueRadio('');
    }
  };

  const deleteCard = (id: number): void => {
    setCardList(cardList.filter((cardList) => cardList.id !== id));
  };

  return (
    <section className="container_recycle">
      <form className="recycle-container">
        <div className="form-card">
          <div className="form-colomn">
            <h2>Recycling map</h2>
            <FormDate value={valueDate} onChange={handleChangeDate} />
            <FormTitle value={valueTitle} onChange={handleChangeTitle} />
            <FormSelect value={valueSelect} onChange={handleChangeSelect} />
            <FormFile value={valueFile?.name} onChange={handleChangeFile} />
          </div>
          <div className="section-radio">
            <h4>Marking: </h4>
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
            <div className="form-row">
              <FormCheckbox checked={valueCheck} onChange={handleChangeCheck} />
              <ButtonForm onClick={addCard}></ButtonForm>
            </div>
          </div>
        </div>
      </form>
      <FormCardList deleteCard={deleteCard} items={cardList} />
    </section>
  );
};

export { Recycle };
