import { Todo } from '@prisma/client';

export class CreateTodoDto {
  title: Todo['title'];
  isCompleted: Todo['isCompleted'];
  authorUsername: Todo['authorUsername'];
}
