import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BillingAddressController } from "./billing-address.controller";
import { BillingAddress } from "./billing-address.entity";
import { BillingAddressService } from './billing-address.service';

@Module({
    imports: [TypeOrmModule.forFeature([BillingAddress])],
    controllers: [BillingAddressController],
    providers: [BillingAddressService]
})

export class BillingAddressModule {}