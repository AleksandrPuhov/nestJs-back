import { Injectable } from '@nestjs/common';
import { IToDoItem } from './interfaces/todoList.interface';

@Injectable()
export class TodoListService {
  private readonly todoList: IToDoItem[] = [
    {
      id: 1,
      name: 'test Name 1',
      count: 17,
    },
    {
      id: 2,
      name: 'test Name 2',
      count: 35,
    },
    {
      id: 3,
      name: 'test Name 3',
      count: 97,
    },
    {
      id: 4,
      name: 'test Name 4',
      count: 83,
    },
    {
      id: 5,
      name: 'test Name 5',
      count: 58,
    },
  ];

  getAll(): IToDoItem[] {
    return this.todoList;
  }
}
