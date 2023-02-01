import { Body, Controller, Get, Post } from '@nestjs/common';
import { IToDoItem } from './interfaces/todoList.interface';
import { TodoListService } from './todoList.service';

@Controller('todos')
export class TodoListController {
  constructor(private readonly todoListService: TodoListService) {}

  @Get()
  getAll(): IToDoItem[] {
    return this.todoListService.getAll();
  }

  @Post()
  create(@Body() newTodo: IToDoItem) {
    this.todoListService.updateOrAdd(newTodo);
  }
}
