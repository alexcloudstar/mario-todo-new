import { FC } from 'react';
import {
  useAddTodoMutation,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} from '../../store/services/todos';
import { ButtonActionsType, TodoType } from '../../types';
import ButtonIcon from './ButtonIcon';

const Button: FC<ButtonActionsType> = ({ buttonType, todo }) => {
  const [addTodo] = useAddTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();

  const isSubmit =
    buttonType === 'submit' ||
    buttonType === 'complete' ||
    buttonType === 'edit';
  const hoverClass = `${
    isSubmit ? 'hover:text-green-500' : 'hover:text-red-500'
  }`;
  const btnClasses = `flex justify-center items-center p-4 border-b-2 border-r-2 border-gray-300 text-lg ${hoverClass} `;

  const onAddTodo = async (todo: TodoType) => {
    try {
      await addTodo({
        ...todo,
        authorUsername: 'some_random_username',
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onClick = async (
    _: unknown,
    typeOfButton: ButtonActionsType['buttonType']
  ) => {
    if (typeOfButton === 'submit' && todo) {
      await onAddTodo(todo);
      return;
    }

    if (typeOfButton === 'complete' && todo) {
      try {
        await updateTodo({
          id: todo.id,
          authorUsername: 'some_random_username',
          isCompleted: !todo.isCompleted,
        });
      } catch (error) {
        console.log(error);
      }
      return;
    }

    if (typeOfButton === 'edit' && todo) {
      try {
        await updateTodo({
          id: todo.id,
          title: todo.title,
          authorUsername: 'some_random_username',
          isCompleted: todo.isCompleted,
        });
      } catch (error) {
        console.log(error);
      }

      return;
    }

    try {
      todo &&
        deleteTodo({ id: todo.id, authorUsername: 'some_random_username' });
    } catch (error) {
      console.log(error);
    }
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