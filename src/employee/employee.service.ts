import { Body, Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './employee.entity';

@Injectable()
export class EmployeeService {
    constructor(
        @InjectRepository(Employee)
        private employeeRepository: Repository<Employee>,
    ) {}

    findAll(): Promise<Employee[]> {
        return this.employeeRepository.find();
    }

    findOne(@Param('id') id: string): Promise<Employee> {
        return this.employeeRepository.findOne(id);
    }

    async create(employee: Employee) {
        return this.employeeRepository.save(employee);
    }

    async update(@Body() employee: Employee) {
        return this.employeeRepository.save(employee);
    }
}
