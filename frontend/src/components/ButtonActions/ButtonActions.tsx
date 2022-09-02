import React, { FC } from 'react';
import { Button } from '..';
import { ButtonActionsType } from '../../types';

const ButtonActions: FC<ButtonActionsType> = ({
  buttonType,
  todoId,
  updatedTodoTitle,
}) => (
  <>
    <Button
      buttonType={buttonType}
      todoId={todoId}
      updatedTodoTitle={updatedTodoTitle}
    />
    <Button buttonType='clear' todoId={todoId} />
  </>
);

export default ButtonActions;
