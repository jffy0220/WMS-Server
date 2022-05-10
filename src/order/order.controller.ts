import { Controller, Body, Get, Param, Post, Put } from '@nestjs/common';
import { Order } from './order.entity';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
    constructor(private orderService: OrderService) {}

    /*
        Todo: Ability to pull data by Business Type, State, Zip, POC, Email, Phone, and Name, City
    */

    @Get()
    async findAll(): Promise<Order[]> {
        return this.orderService.findAll()
    }

    @Get()
    async findOne(@Param('id') id: string): Promise<Order> {
        return this.orderService.findOne(id);
    }

    @Post()
    create(@Body() order: Order) {
        return this.orderService.create(order);
    }

    @Put()
    update(@Body() order: Order) {
        return this.orderService.update(order);
    }
}
