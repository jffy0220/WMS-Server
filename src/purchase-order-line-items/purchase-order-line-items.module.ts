import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PurchaseOrderLineItemsController } from "./purchase-order-line-items.controller";
import { PurchaseOrderLineItems } from "./purchase-order-line-items.entity";
import { PurchaseOrderLineItemsService } from "./purchase-order-line-items.service";

@Module({
    imports: [TypeOrmModule.forFeature([PurchaseOrderLineItems])],
    controllers: [PurchaseOrderLineItemsController],
    providers: [PurchaseOrderLineItemsService]
})

export class PurchaseOrderLineItemsModule {}