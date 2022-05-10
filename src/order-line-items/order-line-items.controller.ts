import { Controller, Body, Get, Post, Put, Param } from '@nestjs/common';
import { OrderLineItems } from './order-line-items.entity';
import { OrderLineItemsService } from './order-line-items.service';

@Controller('order-line-items')
export class OrderLineItemsController {
    constructor(private orderLineItemService: OrderLineItemsService) {}

    /*
        Todo: Ability to pull data by Business Type, State, Zip, POC, Email, Phone, and Name, City
    */

    @Get()
    async findAll(): Promise<OrderLineItems[]> {
        return this.orderLineItemService.findAll()
    }

    @Get()
    async findOne(@Param('id') id: string): Promise<OrderLineItems> {
        return this.orderLineItemService.findOne(id);
    }

    @Post()
    create(@Body() billingAddress: OrderLineItems) {
        return this.orderLineItemService.create(billingAddress);
    }

    @Put()
    update(@Body() billingAddress: OrderLineItems) {
        return this.orderLineItemService.update(billingAddress);
    }
}
