import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrderLineItemsController } from "./order-line-items.controller";
import { OrderLineItems } from "./order-line-items.entity";
import { OrderLineItemsService } from "./order-line-items.service";

@Module({
    imports: [TypeOrmModule.forFeature([OrderLineItems])],
    controllers: [OrderLineItemsController],
    providers: [OrderLineItemsService]
})

export class OrderLineItemsModule {}