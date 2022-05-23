import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Role } from './role.entity';
import { RoleService } from './role.service';

@Controller('role')
export class RoleController {
    constructor(private roleService: RoleService) {}

    /*
        Todo: Ability to pull data by Business Type, State, Zip, POC, Email, Phone, and Name, City
    */

    @Get()
    async findAll(): Promise<Role[]> {
        return this.roleService.findAll()
    }

    @Get()
    async findOne(@Param('id') id: string): Promise<Role> {
        return this.roleService.findOne(id);
    }

    @Post()
    create(@Body() role: Role) {
        return this.roleService.create(role);
    }

    @Put()
    update(@Body() role: Role) {
        return this.roleService.update(role);
    }
}
