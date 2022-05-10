import { Body, Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Warehouse } from './warehouse.entity';

@Injectable()
export class WarehouseService {
    constructor(
        @InjectRepository(Warehouse)
        private warehouseRepository: Repository<Warehouse>,
    ) {}

    findAll(): Promise<Warehouse[]> {
        return this.warehouseRepository.find();
    }

    findOne(@Param('id') id: string): Promise<Warehouse> {
        return this.warehouseRepository.findOne(id);
    }

    async create(warehouse: Warehouse) {
        return this.warehouseRepository.save(warehouse);
    }

    async update(@Body() warehouse: Warehouse) {
        return this.warehouseRepository.save(warehouse);
    }
}
