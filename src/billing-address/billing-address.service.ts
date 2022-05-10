import { Body, Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BillingAddress } from './billing-address.entity';

@Injectable()
export class BillingAddressService {
    constructor(
        @InjectRepository(BillingAddress)
        private billingAddressRepository: Repository<BillingAddress>,
    ) {}

    findAll(): Promise<BillingAddress[]> {
        return this.billingAddressRepository.find();
    }

    findOne(@Param('id') id: string): Promise<BillingAddress> {
        return this.billingAddressRepository.findOne(id);
    }

    async create(billingAddress: BillingAddress) {
        return this.billingAddressRepository.save(billingAddress);
    }

    async update(@Body() billingAddress: BillingAddress) {
        return this.billingAddressRepository.save(billingAddress);
    }
}
