import { FC } from 'react';
import { useDispatch } from 'react-redux';
import {
  addTodo,
  completeTodo,
  editTodo,
  removeTodo,
} from '../../store/todoReducer';
import { ButtonActionsType } from '../../types';
import ButtonIcon from './ButtonIcon';

const Button: FC<ButtonActionsType> = ({ buttonType, todo }) => {
  const dispatch = useDispatch();
  const isSubmit =
    buttonType === 'submit' ||
    buttonType === 'complete' ||
    buttonType === 'edit';
  const hoverClass = `${
    isSubmit ? 'hover:text-green-500' : 'hover:text-red-500'
  }`;
  const btnClasses = `flex justify-center items-center p-4 border-b-2 border-r-2 border-gray-300 text-lg ${hoverClass} `;

  const onClick = (
    _: unknown,
    typeOfButton: ButtonActionsType['buttonType']
  ) => {
    if (typeOfButton === 'submit' && todo) {
      dispatch(addTodo(todo));
      return;
    }

    if (typeOfButton === 'complete' && todo) {
      dispatch(
        completeTodo({
          id: todo.id || '',
          completed: !todo.completed,
        })
      );
      return;
    }

    if (typeOfButton === 'edit' && todo) {
      dispatch(
        editTodo({
          id: todo.id || '',
          title: todo.title ?? '',
          completed: todo.completed,
        })
      );
      return;
    }

    todo && dispatch(removeTodo(todo.id || ''));
  };

  return (
    <ButtonIcon
      btnType={buttonType}
      onClick={onClick}
      btnClasses={btnClasses}
    />
  );
};

export default Button;
