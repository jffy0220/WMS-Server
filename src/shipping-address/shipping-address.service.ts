import { Injectable, Param, Body } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { create } from 'domain';
import { SocketAddress } from 'net';
import { Repository } from 'typeorm';
import { ShippingAddress } from './shipping-address.entity';

@Injectable()
export class ShippingAddressService {
   constructor(
       @InjectRepository(ShippingAddress)
       private shippingAddressRepository: Repository<ShippingAddress>,
   ) {}

   findAll(): Promise<ShippingAddress[]> {
       return this.shippingAddressRepository.find();
   }

   findOne(id: number): Promise<ShippingAddress> {
       return this.shippingAddressRepository.findOne({ id });
   }

   async create(shippingAddress: ShippingAddress) {
       return this.shippingAddressRepository.save(shippingAddress);
   }

   async update(@Body() shippingAddress: ShippingAddress) {
       return this.shippingAddressRepository.save(shippingAddress);
   }
}
