import { Controller, Body, Param, Get, Post, Put } from '@nestjs/common';
import { PurchaseOrderLineItems } from './purchase-order-line-items.entity';
import { PurchaseOrderLineItemsService } from './purchase-order-line-items.service';

@Controller('purchase-order-line-items')
export class PurchaseOrderLineItemsController {
    constructor(private poLineItemService: PurchaseOrderLineItemsService) {}

    /*
        Todo: Ability to pull data by Business Type, State, Zip, POC, Email, Phone, and Name, City
    */

    @Get()
    async findAll(): Promise<PurchaseOrderLineItems[]> {
        return this.poLineItemService.findAll()
    }

    @Get()
    async findOne(@Param('id') id: string): Promise<PurchaseOrderLineItems> {
        return this.poLineItemService.findOne(id);
    }

    @Post()
    create(@Body() billingAddress: PurchaseOrderLineItems) {
        return this.poLineItemService.create(billingAddress);
    }

    @Put()
    update(@Body() billingAddress: PurchaseOrderLineItems) {
        return this.poLineItemService.update(billingAddress);
    }
}
