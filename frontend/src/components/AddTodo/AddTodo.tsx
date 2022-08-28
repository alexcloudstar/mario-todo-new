import React, { useState } from 'react';
import { ButtonActions, Input } from '..';
import { TodoType } from '../../types';

const AddTodo = () => {
  const [todo, setTodo] = useState<TodoType>();

  return (
    <div className='flex'>
      <Input todo={todo?.title || ''} setTodo={setTodo} />
      <ButtonActions todo={todo} buttonType='submit' />
    </div>
  );
};

export default AddTodo;
