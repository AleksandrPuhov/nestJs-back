import { Controller, Get } from '@nestjs/common';
import { IToDoItem } from './interfaces/todoList.interface';
import { TodoListService } from './todoList.service';

@Controller('todo')
export class TodoListController {
  constructor(private readonly todoListService: TodoListService) {}

  @Get()
  getAll(): IToDoItem[] {
    return this.todoListService.getAll();
  }
}
