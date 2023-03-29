import { DataFormCard } from 'types/types';

type ICardItem = DataFormCard;

// let check: string;

export const FormCard: React.FC<ICardItem> = (props) => {
  const { id, title, date, select, check, file, radio } = props;
  // if (props.check === 'true') {
  //   check = 'Unmarked';
  // } else check = 'Marked';

  return (
    <div className="form-new-card">
      <p>{id}</p>
      <p className="new-card-title">
        <u>Title:</u> {title}
      </p>
      <p className="new-card-date">
        <u>Date:</u> {date}
      </p>
      <p className="new-card-select">
        <u>Type of waste:</u> {select}
      </p>
      {/* <p className="new-card-file">
        <u>File:</u> {file}
      </p> */}
      <p className="new-card-check">
        <u>Marking:</u> {check}
      </p>
      {/* <img className="image-form" src={radio} alt="radio" /> */}
    </div>
  );
};
