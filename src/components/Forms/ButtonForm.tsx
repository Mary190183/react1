import React from 'react';
import { FC } from 'react';

interface ButtonProps {
  onClick: React.MouseEventHandler<HTMLInputElement>;
}

export const ButtonForm: FC<ButtonProps> = (props) => {
  const { onClick } = props;

  return (
    <input
      data-testid="button-form"
      className="button-form"
      type="submit"
      value="Submit"
      onClick={onClick}
    ></input>
  );
};
