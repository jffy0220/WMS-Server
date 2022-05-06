import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateShippingAddressDto } from './dto/create-shipping-address.dto';
import { ShippingAddressService } from './shipping-address.service';
import { ShippingAddress } from './interfaces/shipping-address.interface';

@Controller('shipping-address')
export class ShippingAddressController {
    constructor(private shippingAddressService: ShippingAddressService) {}

    /*
        Todo:
        Ability to pull data by the Business Type, State, Zip, poc, email_1, phone_1, city
    */

    @Get()
    async findAll(): Promise<ShippingAddress[]> {
        return this.shippingAddressService.findAll()
    }

    @Get()
    async findOne(@Param('id') id: string): Promise<ShippingAddress> {
        return this.shippingAddressService.findOne(id);
    }

    @Post()
    create(@Body() shippingAddress: ShippingAddress) {
        return this.shippingAddressService.create(shippingAddress);
    }

    @Put()
    update(@Body() shippingAddress: ShippingAddress) {
        return this.shippingAddressService.update(shippingAddress);
    }
}
