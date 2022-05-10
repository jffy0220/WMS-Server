import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PurchaseOrderController } from "./purchase-order.controller";
import { PurchaseOrder } from "./purchase-order.entity";
import { PurchaseOrderService } from "./purchase-order.service";

@Module({
    imports: [TypeOrmModule.forFeature([PurchaseOrder])],
    controllers: [PurchaseOrderController],
    providers: [PurchaseOrderService]
})

export class PurchaseOrderModule {}