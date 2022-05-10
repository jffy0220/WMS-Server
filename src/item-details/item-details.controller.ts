import { Controller, Get, Param, Body, Post, Put } from '@nestjs/common';
import { ItemDetails } from './item-details.entity';
import { ItemDetailsService } from './item-details.service';

@Controller('item-details')
export class ItemDetailsController {
    constructor(private itemDetailsServicce: ItemDetailsService) {}

    @Get()
    async findAll(): Promise<ItemDetails[]> {
        return this.itemDetailsServicce.findAll()
    }

    @Get()
    async findOne(@Param('id') id: string): Promise<ItemDetails> {
        return this.itemDetailsServicce.findOne(id)
    }

    @Post()
    create(@Body() itemDetails: ItemDetails) {
        return this.itemDetailsServicce.create(itemDetails)
    }

    @Put()
    update(@Body() itemDetails: ItemDetails) {
        return this.itemDetailsServicce.update(itemDetails)
    }
}
