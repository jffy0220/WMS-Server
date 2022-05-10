import { Injectable, Body, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(Order)
        private orderRepository: Repository<Order>
    ) {}

    findAll(): Promise<Order[]> {
        return this.orderRepository.find();
    }

    findOne(@Param('id') id: string): Promise<Order> {
        return this.orderRepository.findOne(id);
    }

    async create(order: Order) {
        return this.orderRepository.save(order);
    }

    async update(@Body() order: Order) {
        return this.orderRepository.save(order);
    }
}
