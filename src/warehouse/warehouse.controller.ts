import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Warehouse } from './warehouse.entity';
import { WarehouseService } from './warehouse.service';

@Controller('warehouse')
export class WarehouseController {
    constructor(private warehouseService: WarehouseService) {}

    @Get()
    async findAll(): Promise<Warehouse[]> {
        return this.warehouseService.findAll()
    }

    @Get()
    async findOne(@Param('id') id: string): Promise<Warehouse> {
        return this.warehouseService.findOne(id);
    }

    @Post()
    create(@Body() warehouse: Warehouse) {
        return this.warehouseService.create(warehouse);
    }

    @Put()
    update(@Body() warehouse: Warehouse) {
        return this.warehouseService.update(warehouse);
    }
}
