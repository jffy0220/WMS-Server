import { Injectable } from '@nestjs/common';
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
}
