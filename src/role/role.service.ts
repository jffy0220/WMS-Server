import { Body, Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './role.entity';

@Injectable()
export class RoleService {
    constructor(
        @InjectRepository(Role)
        private roleRepository: Repository<Role>,
    ) {}

    findAll(): Promise<Role[]> {
        return this.roleRepository.find();
    }

    findOne(@Param('id') id: string): Promise<Role> {
        return this.roleRepository.findOne(id);
    }

    async create(role: Role) {
        return this.roleRepository.save(role);
    }

    async update(@Body() role: Role) {
        return this.roleRepository.save(role);
    }
}
