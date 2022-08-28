export type TodoType = { id: string; title: string; completed: boolean };
export type ButtonActionsType = {
  buttonType: 'submit' | 'delete' | 'complete' | 'edit';
  todo?: TodoType;
};
