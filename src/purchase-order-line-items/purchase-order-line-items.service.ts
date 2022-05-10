import { Injectable, Body, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PurchaseOrderLineItems } from './purchase-order-line-items.entity';

@Injectable()
export class PurchaseOrderLineItemsService {
    constructor(
        @InjectRepository(PurchaseOrderLineItems)
        private poLineItemsRepository: Repository<PurchaseOrderLineItems>,
    ) {}

    findAll(): Promise<PurchaseOrderLineItems[]> {
        return this.poLineItemsRepository.find();
    }

    findOne(@Param('id') id: string): Promise<PurchaseOrderLineItems> {
        return this.poLineItemsRepository.findOne(id);
    }

    async create(purchaseOrderLineItems: PurchaseOrderLineItems) {
        return this.poLineItemsRepository.save(purchaseOrderLineItems);
    }

    async update(@Body() purchaseOrderLineItems: PurchaseOrderLineItems) {
        return this.poLineItemsRepository.save(purchaseOrderLineItems);
    }
}
