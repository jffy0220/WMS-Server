import { Body, Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Returns } from './returns.entity';

@Injectable()
export class ReturnsService {
    constructor(
        @InjectRepository(Returns)
        private returnsRepository: Repository<Returns>,
    ) {}

    findAll(): Promise<Returns[]> {
        return this.returnsRepository.find();
    }

    findOne(@Param('id') id: string): Promise<Returns> {
        return this.returnsRepository.findOne(id);
    }

    async create(returns: Returns) {
        return this.returnsRepository.save(returns);
    }

    async update(@Body() returns: Returns) {
        return this.returnsRepository.save(returns);
    }
}
