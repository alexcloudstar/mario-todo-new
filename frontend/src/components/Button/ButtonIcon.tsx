import React, { FC } from 'react';
import { FaCheck, FaEdit, FaTimes } from 'react-icons/fa';
import { ButtonActionsType } from '../../types';

const ButtonIcon: FC<{
  btnType: ButtonActionsType['buttonType'];
  btnClasses: string;
  onClick: (_: unknown, typeOfButton: ButtonActionsType['buttonType']) => void;
}> = ({ btnType, btnClasses, onClick }) => {
  switch (btnType) {
    case 'complete':
      return (
        <button className={btnClasses} onClick={(_) => onClick(_, 'complete')}>
          <FaCheck />
        </button>
      );
    case 'edit':
      return (
        <button className={btnClasses} onClick={(_) => onClick(_, 'edit')}>
          <FaEdit />
        </button>
      );
    case 'delete':
    case 'clear':
      return (
        <button className={btnClasses} onClick={(_) => onClick(_, 'delete')}>
          <FaTimes />
        </button>
      );

    default:
    case 'submit':
      return (
        <button className={btnClasses} onClick={(_) => onClick(_, 'submit')}>
          <FaCheck />
        </button>
      );
  }
};

export default ButtonIcon;
