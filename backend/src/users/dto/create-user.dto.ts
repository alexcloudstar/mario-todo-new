import { User } from '@prisma/client';

export class CreateUserDto {
  username: User['username'];
}
