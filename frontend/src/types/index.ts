export type TodoType = {
  id?: string;
  title: string;
  isCompleted: boolean;
  authorUsername?: string;
};
export type ButtonActionsType = {
  buttonType: 'submit' | 'delete' | 'complete' | 'edit';
  todo?: TodoType;
};
