export type TodoType = {
  id?: string;
  title: string;
  isCompleted: boolean;
  authorUsername?: string;
};
export type ButtonActionsType = {
  buttonType: 'submit' | 'delete' | 'complete' | 'edit' | 'clear';
  todoId: string;
  updatedTodoTitle?: string;
  setTodo?: React.Dispatch<React.SetStateAction<TodoType | undefined>>;
};

export type UserType = {
  username: string;
  todos?: TodoType[];
};
