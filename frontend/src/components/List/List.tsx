import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Todo } from './components';

const List = () => {
  const todos = useSelector((state: RootState) => state.todo);

  return (
    <div className='flex flex-col'>
      {todos.map(({ id, title, completed }) => (
        <Fragment key={title}>
          <Todo id={id} title={title} completed={completed} />
        </Fragment>
      ))}
    </div>
  );
};

export default List;
