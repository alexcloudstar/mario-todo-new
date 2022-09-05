import { FC } from 'react';
import {
  useAddTodoMutation,
  useDeleteTodoMutation,
  useGetTodoByIdQuery,
  useUpdateTodoMutation,
} from '../../store/services/todos';
import { ButtonActionsType } from '../../types';
import { generateRandomId, getUser } from '../../utils';
import ButtonIcon from './ButtonIcon';

const Button: FC<ButtonActionsType> = ({
  buttonType,
  todoId,
  updatedTodoTitle,
}) => {
  const [addTodo] = useAddTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();

  const { data: todo, isLoading } = useGetTodoByIdQuery(
    todoId || generateRandomId()
  );

  const isSubmit =
    buttonType === 'submit' ||
    buttonType === 'complete' ||
    buttonType === 'edit';
  const hoverClass = `${
    isSubmit ? 'hover:text-green-500' : 'hover:text-red-500'
  }`;
  const btnClasses = `button flex justify-center items-center p-4 border-b-2 border-r-2 border-gray-300 text-lg ${hoverClass} `;

  const authorUsername = getUser() || 'no_username';

  const onClick = async (
    _: unknown,
    typeOfButton: ButtonActionsType['buttonType']
  ) => {
    if (typeOfButton === 'submit') {
      try {
        await addTodo({
          title: updatedTodoTitle || 'Got some error',
          authorUsername,
          isCompleted: false,
        });
      } catch (error) {
        console.log(error);
      }
      return;
    }

    if (typeOfButton === 'complete') {
      try {
        !isLoading &&
          todo &&
          (await updateTodo({
            id: todo?.id,
            authorUsername,
            isCompleted: !todo?.isCompleted,
          }));
      } catch (error) {
        console.log(error);
      }
      return;
    }

    if (typeOfButton === 'delete') {
      try {
        !isLoading &&
          todo &&
          deleteTodo({
            id: todo.id,
            authorUsername,
          });
      } catch (error) {
        console.log(error);
      }

      return;
    }

    try {
      todo &&
        (await updateTodo({
          id: todo.id,
          title: updatedTodoTitle,
          authorUsername,
        }));
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
