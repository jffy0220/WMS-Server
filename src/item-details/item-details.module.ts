import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ItemDetailsController } from "./item-details.controller";
import { ItemDetails } from "./item-details.entity";
import { ItemDetailsService } from "./item-details.service";

@Module({
    imports: [TypeOrmModule.forFeature([ItemDetails])],
    controllers: [ItemDetailsController],
    providers: [ItemDetailsService]
})

export class ItemDetailsModule {}