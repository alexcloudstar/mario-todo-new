import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User as UserModel } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get(':username')
  async findOne(
    @Param('username') username: UserModel['username'],
  ): Promise<UserModel> {
    const user = await this.userService.findOne({ username: username });

    if (!user) throw new HttpException('No user found', HttpStatus.NOT_FOUND);

    return user;
  }

  @Get()
  async findUsers(): Promise<UserModel[]> {
    return this.userService.findAll();
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<UserModel> {
    const user = await this.userService.findOne({
      username: createUserDto.username,
    });

    if (user)
      throw new HttpException(
        { status: HttpStatus.BAD_REQUEST, error: 'This username is taken' },
        HttpStatus.BAD_REQUEST,
      );

    return this.userService.createUser(createUserDto);
  }
}
