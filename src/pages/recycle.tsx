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

let errorTitle,
  errorDate,
  errorFile,
  errorSelect,
  errorRadio = '';

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
  if (valueTitle.length < 2 && valueTitle.length > 0) {
    errorTitle = 'Errors. less 2 simbols.';
  } else if (valueTitle === '') {
    errorTitle = 'Please, choose title waste';
  } else {
    errorTitle = '';
  }
  if (valueDate.length > 10) {
    errorDate = 'Date more 10 simbols';
  } else if (valueDate === '') {
    errorDate = 'Please, choose date';
  } else {
    errorDate = '';
  }
  if (valueSelect === '') {
    errorSelect = 'Please, choose type of waste';
  } else {
    errorSelect = '';
  }
  if (valueFile === undefined) {
    errorFile = 'Please, enter file';
  } else {
    errorFile = '';
  }
  if (valueRadio === '') {
    errorRadio = 'Please, choose type of marking waste';
  } else {
    errorRadio = '';
  }

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
            <p className="error">{errorDate}</p>
            <FormTitle value={valueTitle} onChange={handleChangeTitle} />
            <p className="error">{errorTitle}</p>
            <FormSelect value={valueSelect} onChange={handleChangeSelect} />
            <p className="error">{errorSelect}</p>
            <FormFile value={valueFile?.name} onChange={handleChangeFile} />
            <p className="error">{errorFile}</p>
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
            <p className="error">{errorRadio}</p>
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
