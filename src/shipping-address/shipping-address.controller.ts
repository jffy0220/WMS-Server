import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateShippingAddressDto } from './dto/create-shipping-address.dto';
import { ShippingAddressService } from './shipping-address.service';
import { ShippingAddress } from './interfaces/shipping-address.interface';

@Controller('shipping-address')
export class ShippingAddressController {
    constructor(private shippingAddressService: ShippingAddressService) {}

    @Get()
    async findAll(): Promise<ShippingAddress[]> {
        return this.shippingAddressService.findAll()
    }
}
