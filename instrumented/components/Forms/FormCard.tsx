import React from 'react';
import { DataFormCard } from '../../types/types';
import { deleteCard } from '../../store/recycleSlice';
import { useDispatch } from 'react-redux';

type ICardItem = DataFormCard;
let checkMean: string;

export const FormCard: React.FC<ICardItem> = (props) => {
  const { id, title, date, select, file, radio } = props;
  const dispatch = useDispatch();
  if (props.check === true) {
    checkMean = 'Dirty';
  } else checkMean = 'Clean';
  let src = '';
  if (typeof file === 'string') {
    src = file;
  } else if (file instanceof File) {
    src = URL.createObjectURL(file);
  }
  return (
    <div className="form-new-card" id={id.toString()} data-testid="form-card">
      <button className="button-form-close" onClick={() => dispatch(deleteCard({ id }))}>
        x
      </button>
      <p className="new-card-title">
        <u>Title:</u> {title}
      </p>
      <p className="new-card-date">
        <u>Date:</u> {date}
      </p>
      <p className="new-card-select">
        <u>Type of waste:</u> {select}
      </p>
      <p className="new-card-file">
        <u>File:</u>
        <img className="image-form" src={src} alt="file" />
      </p>
      <p className="new-card-check">
        <u>Marking:</u> {checkMean}
      </p>
      <img className="image-form" src={radio} alt="radio" />
    </div>
  );
};
