import FormDate from '../components/Forms/FormDate';
import FormTitle from '../components/Forms/FormTitle';
import FormSelect from '../components/Forms/FormSelect';
import FormFile from '../components/Forms/FormFile';
import FormCard from '../components/Forms/FormCard';
import FormCheckbox from '../components/Forms/FormCheckbox';
import data from '../data/radio.json';
import React from 'react';

let check: string;

const CreateFormCard = (props: {
  number: number;
  title: string;
  select: string;
  date: string;
  check: string;
  radio: string;
}) => {
  const titleInput = localStorage.getItem('titleInput') as string;
  const selectInput = localStorage.getItem('selectInput') as string;
  const dateInput = localStorage.getItem('dateInput') as string;
  const checkInput = localStorage.getItem('checkInput') as string;
  const fileInput = localStorage.getItem('fileInput') as string;
  const radioInput = localStorage.getItem('radioInput') as string;
  if (checkInput === 'true') {
    check = 'Unmarked';
  } else check = 'Marked';

  return (
    <div className="form-new-card">
      <p>{props.number + 1}</p>
      <p className="new-card-title">
        <u>Title:</u> {titleInput.replace(/\"/g, ``)}
      </p>
      <p className="new-card-date">
        <u>Date:</u> {dateInput.replace(/\"/g, ``)}
      </p>
      <p className="new-card-select">
        <u>Type of waste:</u> {selectInput.replace(/\"/g, ``)}
      </p>
      <p className="new-card-file">
        <u>File:</u> {fileInput.replace(/\"/g, ``)}
      </p>
      <p className="new-card-check">
        <u>Marking:</u> {check}
      </p>
      <img className="image-form" src={radioInput} alt="radio" />
    </div>
  );
};
const ButtonForm = (props: {
  addChild: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactFragment;
}) => {
  return (
    <>
      <button
        data-testid="button-form"
        onClick={props.addChild}
        className="button-form"
        type="button"
      >
        Submit
      </button>
      <div className="container-form-card">{props.children}</div>
    </>
  );
};

class Recycle extends React.Component {
  state = {
    numChildren: 0,
  };
  render() {
    const children = [];

    for (let i = 0; i < this.state.numChildren; i += 1) {
      children.push(
        <CreateFormCard key={i} number={i} title={''} select={''} date={''} check={''} radio={''} />
      );
    }

    return (
      <>
        <form className="recycle-container" method="get" noValidate={true}>
          <div className="form-card">
            <div className="form-colomn">
              <h2>Recycling map</h2>
              <FormDate />
              <FormTitle />
              <FormSelect />
              <FormFile />
              <FormCheckbox />
            </div>
            <div>
              <h4>Marking:</h4>
              <ul className="recycle__ol_garbage">
                {data.radio.map((radio) => {
                  return (
                    <FormCard key={radio.id} id={radio.id} image={radio.image} name={radio.name} />
                  );
                })}
              </ul>
            </div>
          </div>
          <ButtonForm addChild={this.onAddChild}>{children}</ButtonForm>
        </form>
      </>
    );
  }

  onAddChild = () => {
    this.setState({
      numChildren: this.state.numChildren + 1,
    });
  };
}

export { Recycle };
