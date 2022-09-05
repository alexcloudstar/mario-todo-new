import React, { FC } from 'react';
import { Button } from '..';
import { ButtonActionsType } from '../../types';

const ButtonActions: FC<ButtonActionsType> = ({
  buttonType,
  todoId,
  updatedTodoTitle,
  setTodo,
}) => (
  <>
    <Button
      buttonType={buttonType}
      todoId={todoId}
      updatedTodoTitle={updatedTodoTitle}
      setTodo={setTodo}
    />
    <Button buttonType='delete' todoId={todoId} setTodo={setTodo} />
  </>
);
export default ButtonActions;
