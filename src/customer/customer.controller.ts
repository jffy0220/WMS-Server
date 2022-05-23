import { Customer } from './customer.entity';
import { CustomerService } from './customer.service';
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';

@Controller('customer')
export class CustomerController {
    constructor(private customerService: CustomerService) {}

    /*
        Todo: Ability to pull data by Business Type, State, Zip, POC, Email, Phone, and Name, City
    */

    @Get()
    async findAll(): Promise<Customer[]> {
        return this.customerService.findAll()
    }

    @Get()
    async findOne(@Param('id') id: string): Promise<Customer> {
        return this.customerService.findOne(id);
    }

    @Post()
    create(@Body() customer: Customer) {
        return this.customerService.create(customer);
    }

    @Put()
    update(@Body() customer: Customer) {
        return this.customerService.update(customer);
    }
}
