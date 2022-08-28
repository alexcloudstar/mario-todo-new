import React, { FC } from 'react';
import { Button } from '..';
import { ButtonActionsType } from '../../types';

const ButtonActions: FC<ButtonActionsType> = ({ buttonType, todo }) => (
  <>
    <Button buttonType={buttonType} todo={todo} />
    <Button buttonType='delete' todo={todo} />
  </>
);

export default ButtonActions;
