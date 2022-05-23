import { Body, Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubDepartment } from './sub-department.entity';

@Injectable()
export class SubDepartmentService {
    constructor(
        @InjectRepository(SubDepartment)
        private subDepartmentRepository: Repository<SubDepartment>,
    ) {}

    findAll(): Promise<SubDepartment[]> {
        return this.subDepartmentRepository.find();
    }

    findOne(@Param('id') id: string): Promise<SubDepartment> {
        return this.subDepartmentRepository.findOne(id);
    }

    async create(subDepartment: SubDepartment) {
        return this.subDepartmentRepository.save(subDepartment);
    }

    async update(@Body() subDepartment: SubDepartment) {
        return this.subDepartmentRepository.save(subDepartment);
    }
}
