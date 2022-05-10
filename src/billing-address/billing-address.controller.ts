import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { BillingAddress } from './billing-address.entity';
import { BillingAddressService } from './billing-address.service';

@Controller('billing-address')
export class BillingAddressController {
    constructor(private billingAddressService: BillingAddressService) {}

    /*
        Todo: Ability to pull data by Business Type, State, Zip, POC, Email, Phone, and Name, City
    */

    @Get()
    async findAll(): Promise<BillingAddress[]> {
        return this.billingAddressService.findAll()
    }

    @Get()
    async findOne(@Param('id') id: string): Promise<BillingAddress> {
        return this.billingAddressService.findOne(id);
    }

    @Post()
    create(@Body() billingAddress: BillingAddress) {
        return this.billingAddressService.create(billingAddress);
    }

    @Put()
    update(@Body() billingAddress: BillingAddress) {
        return this.billingAddressService.update(billingAddress);
    }
}
