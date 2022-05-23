import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Employee } from './employee.entity';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
    constructor(private employeeService: EmployeeService) {}

    /*
        Todo: Ability to pull data by Business Type, State, Zip, POC, Email, Phone, and Name, City
    */

    @Get()
    async findAll(): Promise<Employee[]> {
        return this.employeeService.findAll()
    }

    @Get()
    async findOne(@Param('id') id: string): Promise<Employee> {
        return this.employeeService.findOne(id);
    }

    @Post()
    create(@Body() billingAddress: Employee) {
        return this.employeeService.create(billingAddress);
    }

    @Put()
    update(@Body() billingAddress: Employee) {
        return this.employeeService.update(billingAddress);
    }
}
