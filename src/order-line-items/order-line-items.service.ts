import { Injectable, Body, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderLineItems } from './order-line-items.entity';

@Injectable()
export class OrderLineItemsService {
    constructor(
        @InjectRepository(OrderLineItems)
        private orderLineItemRepository: Repository<OrderLineItems>,
    ) {}

    findAll(): Promise<OrderLineItems[]> {
        return this.orderLineItemRepository.find();
    }

    findOne(@Param('id') id: string): Promise<OrderLineItems> {
        return this.orderLineItemRepository.findOne(id);
    }

    async create(orderLineItems: OrderLineItems) {
        return this.orderLineItemRepository.save(orderLineItems);
    }

    async update(@Body() orderLineItems: OrderLineItems) {
        return this.orderLineItemRepository.save(orderLineItems);
    }
}
