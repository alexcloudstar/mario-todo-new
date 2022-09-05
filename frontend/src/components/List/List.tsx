import { Fragment } from 'react';
import { useGetTodoByUserQuery } from '../../store/services/todos';
import { getUser } from '../../utils';
import { Todo } from './components';

const List = () => {
  const {
    data: todos,
    error,
    isLoading,
  } = useGetTodoByUserQuery(getUser() || 'no_username', {
    refetchOnMountOrArgChange: true,
  });

  if ((!error && isLoading) || !todos) return <div>Loading...</div>;

  if (error) return <div>Get some error</div>;

  return (
    <div className='flex flex-col'>
      {todos.map(({ id, title, isCompleted }) => (
        <Fragment key={title + `${(Math.random() * 100).toFixed()}`}>
          <Todo id={id} title={title} isCompleted={isCompleted} />
        </Fragment>
      ))}
    </div>
  );
};

export default List;
