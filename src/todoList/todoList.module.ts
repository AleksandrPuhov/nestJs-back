import { Module } from '@nestjs/common';
import { TodoListController } from './todoList.controller';
import { TodoListService } from './todoList.service';

@Module({
  controllers: [TodoListController],
  providers: [TodoListService],
})
export class TodoListModule {}
