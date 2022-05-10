import { Body, Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PurchaseOrder } from './purchase-order.entity';

@Injectable()
export class PurchaseOrderService {
    constructor(
        @InjectRepository(PurchaseOrder)
        private purchaseOrderRepository: Repository<PurchaseOrder>,
    ) {}

    findAll(): Promise<PurchaseOrder[]> {
        return this.purchaseOrderRepository.find();
    }

    findOne(@Param('id') id: string): Promise<PurchaseOrder> {
        return this.purchaseOrderRepository.findOne(id);
    }

    async create(purchaseOrder: PurchaseOrder) {
        return this.purchaseOrderRepository.save(purchaseOrder);
    }

    async update(@Body() purchaseOrder: PurchaseOrder) {
        return this.purchaseOrderRepository.save(purchaseOrder);
    }
}
