import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Users } from './users.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    /*
        Todo: Ability to pull data by Business Type, State, Zip, POC, Email, Phone, and Name, City
    */

    @Get()
    async findAll(): Promise<Users[]> {
        return this.usersService.findAll()
    }

    @Get()
    async findOne(@Param('id') id: string): Promise<Users> {
        return this.usersService.findOne(id);
    }

    @Post()
    create(@Body() user: Users) {
        return this.usersService.create(user);
    }

    @Put()
    update(@Body() user: Users) {
        return this.usersService.update(user);
    }
}
