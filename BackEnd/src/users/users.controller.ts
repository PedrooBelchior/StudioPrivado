import { UserService } from './shared/user.service';
import { Controller, Get, Param, Body, Post, Put, Delete, UseGuards } from '@nestjs/common';
import { User, Pedido } from './shared/user';
import { JwtAuthGuard } from './../auth/shared/jwt-auth.guard';

@Controller('users')
export class UsersController {

    constructor(
        private usersService: UserService) { }

    
    @Get()
    async getAll(): Promise<User[]> {
        return this.usersService.getAll();
    }

    @Get("/pedidos")
    async getAllOrder(): Promise<any[]> {
        return this.usersService.getAllOrder();
    }
    @Get("/pedidos/:id")
    async getByPedidoId(@Param('id') id: string): Promise<Pedido>{
        return this.usersService.getByPeidoId(id);
    }

    
    @Get(':id')
    async getById(@Param('id') id: string): Promise<User>{
        return this.usersService.getById(id);
    }

    
    @Post()
    async create(@Body() user: User): Promise<User>{
        return this.usersService.create(user);
    }

    
    @Put(':id')
    async update(@Param('id') id: string, @Body() user: User): Promise<User>{
        return this.usersService.update(id, user);
    }

    
    @Delete(':id')
    async delete(@Param('id') id: string){
        this.usersService.delete(id);
    }

}
