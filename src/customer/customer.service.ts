import { Body, Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './customer.entity';

@Injectable()
export class CustomerService {
    constructor(
        @InjectRepository(Customer)
        private customerRepository: Repository<Customer>,
    ) {}

    findAll(): Promise<Customer[]> {
        return this.customerRepository.find();
    }

    findOne(@Param('id') id: string): Promise<Customer> {
        return this.customerRepository.findOne(id);
    }

    async create(customer: Customer) {
        return this.customerRepository.save(customer);
    }

    async update(@Body() customer: Customer) {
        return this.customerRepository.save(customer);
    }
}
