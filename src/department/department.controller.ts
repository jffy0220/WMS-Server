import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Department } from './department.entity';
import { DepartmentService } from './department.service';

@Controller('department')
export class DepartmentController {
    constructor(private departmentService: DepartmentService) {}

    /*
        Todo: Ability to pull data by Business Type, State, Zip, POC, Email, Phone, and Name, City
    */

    @Get()
    async findAll(): Promise<Department[]> {
        return this.departmentService.findAll()
    }

    @Get()
    async findOne(@Param('id') id: string): Promise<Department> {
        return this.departmentService.findOne(id);
    }

    @Post()
    create(@Body() department: Department) {
        return this.departmentService.create(department);
    }

    @Put()
    update(@Body() department: Department) {
        return this.departmentService.update(department);
    }
}
