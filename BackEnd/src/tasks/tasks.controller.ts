import { TaskService } from './shared/task.service';
import { Controller, Get, Param, Body, Post, Put, Delete, UseGuards } from '@nestjs/common';
import { Task } from './shared/task';
import { JwtAuthGuard } from './../auth/shared/jwt-auth.guard';

@Controller('produtos')
export class TasksController {

    constructor(
        private tasksService: TaskService) { }

    @Get()
    async getAll(): Promise<Task[]> {
        return this.tasksService.getAll();
    }


    @Get(':id')
    async getById(@Param('id') id: string): Promise<Task> {
        return this.tasksService.getById(id);
    }
    
    @Post()
    async create(@Body() task: Task): Promise<Task> {
        return this.tasksService.create(task);
    }
    
    @Put(':id')
    async update(@Param('id') id: string, @Body() task: Task): Promise<Task> {
        return this.tasksService.update(id, task);
    }
   
    @Delete(':id')
    async delete(@Param('id') id: string) {
        this.tasksService.delete(id);
    }

}
