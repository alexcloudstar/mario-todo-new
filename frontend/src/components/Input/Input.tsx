import React, { FC } from 'react';
import { TodoType } from '../../types';

const Input: FC<{
  todo: TodoType['title'];
  setTodo: React.Dispatch<React.SetStateAction<TodoType | undefined>>;
}> = ({ todo, setTodo }) => {
  const id = Math.random() * 100;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTodo({
      id: `${id.toFixed()}`,
      title: e.target.value,
      completed: false,
    });

  return (
    <div className='border-b-2 border-r-2 border-gray-300 w-full'>
      <input
        type='text'
        id='addTodo'
        className='border-0 text-center text-gray-600 text-2xl outline-0	 block w-full p-2.5  dark:text-gray-600 dark:outline-0'
        placeholder='New Todo'
        value={todo}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
