import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Returns } from './returns.entity';
import { ReturnsService } from './returns.service';

@Controller('returns')
export class ReturnsController {
    constructor(private returnsService: ReturnsService) {}

    /*
        Todo: Ability to pull data by Business Type, State, Zip, POC, Email, Phone, and Name, City
    */

    @Get()
    async findAll(): Promise<Returns[]> {
        return this.returnsService.findAll()
    }

    @Get()
    async findOne(@Param('id') id: string): Promise<Returns> {
        return this.returnsService.findOne(id);
    }

    @Post()
    create(@Body() returns: Returns) {
        return this.returnsService.create(returns);
    }

    @Put()
    update(@Body() returns: Returns) {
        return this.returnsService.update(returns);
    }
}
