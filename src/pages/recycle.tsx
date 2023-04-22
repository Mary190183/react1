import { FormDate } from '../components/Forms/FormDate';
import { ButtonForm } from '../components/Forms/ButtonForm';
import FormTitle from '../components/Forms/FormTitle';
import FormSelect from '../components/Forms/FormSelect';
import FormFile from '../components/Forms/FormFile';
import FormRadio from '../components/Forms/FormRadio';
import FormCheckbox from '../components/Forms/FormCheckbox';
import { FormCardList } from '../components/Forms/FormCardList';
import React, { FC, useState } from 'react';
import data from '../data/radio.json';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { addCard } from '../store/recycleSlice';

export default function Recycle() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: 'onBlur' });
  // const cards = useSelector((state: RootState) => state.cards.cards);
  // const dispatch = useDispatch();
  const onSubmit: SubmitHandler<FieldValues> = (dataForm) => {
    // dispatch(
    //   addCard({
    //     id: Date.now(),
    //     date: dataForm.date,
    //     title: dataForm.title,
    //     select: dataForm.select,
    //     file: dataForm.file,
    //     check: dataForm.check,
    //     radio: dataForm.radio,
    //     submit: dataForm.submit,
    //   })
    // );
    setValueCheck(false);
    setValueDate('');
    setValueFile(undefined);
    setValueRadio('');
    setValueTitle('');
    setValueSelect('');
    reset();
    alert('Card is completed');
  };
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

  return (
    <section className="container_recycle">
      <form className="recycle-container" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-card">
          <div className="form-colomn">
            <h2>Recycling map</h2>
            <FormDate
              value={valueDate}
              onChange={handleChangeDate}
              register={register}
              errors={errors}
              label="date"
            />
            <FormTitle
              value={valueTitle}
              onChange={handleChangeTitle}
              register={register}
              errors={errors}
              label="title"
            />
            <FormSelect
              value={valueSelect}
              onChange={handleChangeSelect}
              register={register}
              errors={errors}
              label="select"
            />
            <FormFile
              value={valueFile?.name}
              onChange={handleChangeFile}
              register={register}
              errors={errors}
              label="file"
            />
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
                    register={register}
                    errors={errors}
                    label="radio"
                  />
                );
              })}
            </ul>
            <div className="error">
              {errors?.radio && <p>{`${errors.radio.message}` || 'Error'}</p>}
            </div>
            <div className="form-row">
              <FormCheckbox
                checked={valueCheck}
                onChange={handleChangeCheck}
                register={register}
                label="select"
                errors={errors}
              />
              <ButtonForm register={register} errors={errors} label={'submit'}></ButtonForm>
            </div>
          </div>
        </div>
      </form>
      {/* <FormCardList items={cards} /> */}
    </section>
  );
}
