import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Todo as TodoModel, User } from '@prisma/client';
import { CreateTodoDto } from './dto/create-todo.dto';

import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  @HttpCode(200)
  async findAll(): Promise<TodoModel[]> {
    return this.todosService.findAll({ where: {} });
  }

  @Get('user/:authorUsername')
  @HttpCode(200)
  async findUserTodos(
    @Param('authorUsername') authorUsername: User['username'],
  ): Promise<TodoModel[]> {
    return this.todosService.findAll({ where: { authorUsername } });
  }

  @Get(':id')
  @HttpCode(200)
  async findOne(@Param('id') id: TodoModel['id']): Promise<TodoModel> {
    return this.todosService.findOne({ id: Number(id) });
  }

  @Post()
  @HttpCode(201)
  async create(@Body() createTodoDto: CreateTodoDto): Promise<TodoModel> {
    return this.todosService.create({
      title: createTodoDto.title,
      isCompleted: createTodoDto.isCompleted,
      author: {
        connect: { username: createTodoDto.authorUsername },
      },
    });
  }

  @Put(':id')
  @HttpCode(200)
  async update(
    @Param('id') id: TodoModel['id'],
    @Body() createTodoDto: CreateTodoDto,
  ): Promise<TodoModel> {
    const todo = await this.todosService.findOne({ id: Number(id) });
    if (todo.authorUsername !== createTodoDto.authorUsername)
      throw new Error('You are not authorized');

    return this.todosService.update({
      where: { id: Number(id) },
      data: {
        title: createTodoDto.title,
        isCompleted: createTodoDto.isCompleted,
        author: {
          connect: { username: createTodoDto.authorUsername },
        },
      },
    });
  }

  @Delete(':id')
  @HttpCode(201)
  async delete(
    @Param('id') id: TodoModel['id'],
    @Body() createTodoDto: CreateTodoDto,
  ): Promise<TodoModel[] | any> {
    const todo = await this.todosService.findOne({ id: Number(id) });

    if (!todo) throw new HttpException('No todo found', HttpStatus.NOT_FOUND);

    if (todo?.authorUsername !== createTodoDto.authorUsername)
      throw new Error('You are not authorized');
    this.todosService.delete({ id: Number(id) });
    return this.todosService.findAll({ where: {} });
  }
}
