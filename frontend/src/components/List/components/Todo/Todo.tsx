import { FC, useEffect, useRef, useState } from 'react';
import { ButtonActions } from '../../..';
import { type TodoType } from '../../../../types';

const Todo: FC<TodoType> = ({ id, title, isCompleted }) => {
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [updatedTodoTitle, setUpdatedTodoTitle] = useState<string>(title);

  const inputRef = useRef<HTMLInputElement>(null);

  const classes = `border-0 ${
    isEditable ? 'text-green-700' : 'text-gray-700'
  } text-lg outline-0 block w-full p-2.5 ${
    isCompleted && !isEditable ? 'line-through' : ''
  }`;

  const todo = {
    id,
    title: updatedTodoTitle,
    isCompleted,
  };

  const onSetIsEditable = () => setIsEditable(!isEditable);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedTodoTitle(e.target.value);
  };

  useEffect(() => {
    if (isEditable) inputRef.current?.focus();
  }, [isEditable]);

  console.log(isEditable);

  return (
    <div className='border-b-2 border-r-2 border-gray-300 w-full flex'>
      {isEditable ? (
        <input
          type='text'
          id={id}
          className={classes}
          placeholder={title}
          onBlur={onSetIsEditable}
          onChange={onChange}
          ref={inputRef}
          value={updatedTodoTitle}
        />
      ) : (
        <span className={`${classes} cursor-pointer`} onClick={onSetIsEditable}>
          {updatedTodoTitle}
        </span>
      )}
      <ButtonActions
        buttonType={isEditable ? 'edit' : 'complete'}
        todo={todo}
      />
    </div>
  );
};

export default Todo;
