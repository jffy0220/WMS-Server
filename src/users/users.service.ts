import { Body, Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private usersRepository: Repository<Users>,
    ) {}

    findAll(): Promise<Users[]> {
        return this.usersRepository.find();
    }

    findOne(@Param('id') id: string): Promise<Users> {
        return this.usersRepository.findOne(id);
    }

    async create(user: Users) {
        return this.usersRepository.save(user);
    }

    async update(@Body() user: Users) {
        return this.usersRepository.save(user);
    }
}
