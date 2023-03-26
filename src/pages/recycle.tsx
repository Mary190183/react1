import FormDate from '../components/Forms/FormDate';
import FormTitle from '../components/Forms/FormTitle';
import FormSelect from '../components/Forms/FormSelect';
import FormFile from '../components/Forms/FormFile';
import FormCard from '../components/Forms/FormCard';
import FormCheckbox from '../components/Forms/FormCheckbox';
import data from '../data/radio.json';
import React from 'react';

let check: string;

const CreateFormCard = (props: { number: number }) => {
  const titleInput = localStorage.getItem('titleInput') as string;
  const selectInput = localStorage.getItem('selectInput') as string;
  const dateInput = localStorage.getItem('dateInput') as string;
  const checkInput = localStorage.getItem('checkInput') as string;
  const fileInput = localStorage.getItem('fileInput') as string;
  if (checkInput === 'true') {
    check = 'Unmarked';
  } else check = '-';
  return (
    <div className="form-new-card">
      <p>{props.number + 1}</p>
      <p className="new-card-title">Title: {titleInput.replace(/\"/g, ``)}</p>
      <p className="new-card-date">Date: {dateInput.replace(/\"/g, ``)}</p>
      <p className="new-card-check">Marking: {check}</p>
      <p className="new-card-select">Type of waste: {selectInput.replace(/\"/g, ``)}</p>
      <p className="new-card-select">File: {fileInput.replace(/\"/g, ``)}</p>
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
      children.push(<CreateFormCard key={i} number={i} />);
    }

    return (
      <>
        <form className="recycle-container" method="get" noValidate={true}>
          <div className="form-card">
            <h2>Recycling map</h2>
            <FormDate />
            <FormTitle />
            <FormSelect />
            <FormFile />
            <ul className="recycle__ol_garbage">
              {data.radio.map((radio) => {
                return (
                  <FormCard key={radio.id} id={radio.id} image={radio.image} name={radio.name} />
                );
              })}
            </ul>
            <FormCheckbox />
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
