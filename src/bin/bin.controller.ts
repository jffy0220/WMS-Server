import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Bin } from './bin.entity';
import { BinService } from './bin.service';

@Controller('bin')
export class BinController {
    constructor(private binService: BinService) {}

    @Get()
    async findAll(): Promise<Bin[]> {
        return this.binService.findAll()
    }

    @Get()
    async findOne(@Param('id') id: string): Promise<Bin> {
        return this.binService.findOne(id)
    }

    @Post()
    create(@Body() bin: Bin) {
        return this.binService.create(bin)
    }

    @Put()
    update(@Body() bin: Bin) {
        return this.binService.update(bin)
    }
}
