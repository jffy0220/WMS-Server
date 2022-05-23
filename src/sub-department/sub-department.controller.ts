import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { SubDepartment } from './sub-department.entity';
import { SubDepartmentService } from './sub-department.service';

@Controller('sub-department')
export class SubDepartmentController {
    constructor(private subDepartmentService: SubDepartmentService) {}

    /*
        Todo: Ability to pull data by Business Type, State, Zip, POC, Email, Phone, and Name, City
    */

    @Get()
    async findAll(): Promise<SubDepartment[]> {
        return this.subDepartmentService.findAll()
    }

    @Get()
    async findOne(@Param('id') id: string): Promise<SubDepartment> {
        return this.subDepartmentService.findOne(id);
    }

    @Post()
    create(@Body() subDepartment: SubDepartment) {
        return this.subDepartmentService.create(subDepartment);
    }

    @Put()
    update(@Body() subDepartment: SubDepartment) {
        return this.subDepartmentService.update(subDepartment);
    }
}
