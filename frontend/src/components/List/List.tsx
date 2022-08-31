import { Fragment } from 'react';
import { useGetTodoByUserQuery } from '../../store/services/todos';
import { Todo } from './components';

const List = () => {
  const { data, error, isLoading } = useGetTodoByUserQuery(
    'some_random_username',
    {
      refetchOnMountOrArgChange: true,
    }
  );

  if ((!error && isLoading) || !data) return <div>Loading...</div>;

  if (error) return <div>Get some error</div>;

  return (
    <div className='flex flex-col'>
      {data.map(({ id, title, isCompleted }) => (
        <Fragment key={title}>
          <Todo id={id} title={title} isCompleted={isCompleted} />
        </Fragment>
      ))}
    </div>
  );
};

export default List;
