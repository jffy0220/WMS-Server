import { Body, Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bin } from './bin.entity';

@Injectable()
export class BinService {
    constructor(
        @InjectRepository(Bin)
        private binRepository: Repository<Bin>,
    ) {}

    findAll(): Promise<Bin[]> {
        return this.binRepository.find();
    }

    findOne(@Param('id') id: string): Promise<Bin> {
        return this.binRepository.findOne(id);
    }

    async create(bin: Bin) {
        return this.binRepository.save(bin);
    }

    async update(@Body() bin: Bin) {
        return this.binRepository.save(bin);
    }
}
