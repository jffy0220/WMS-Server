import { Body, Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Department } from './department.entity';

@Injectable()
export class DepartmentService {
    constructor(
        @InjectRepository(Department)
        private departmentRepository: Repository<Department>,
    ) {}

    findAll(): Promise<Department[]> {
        return this.departmentRepository.find();
    }

    findOne(@Param('id') id: string): Promise<Department> {
        return this.departmentRepository.findOne(id);
    }

    async create(department: Department) {
        return this.departmentRepository.save(department);
    }

    async update(@Body() department: Department) {
        return this.departmentRepository.save(department);
    }
}
