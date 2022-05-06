import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ShippingAddressController } from "./shipping-address.controller";
import { ShippingAddressService } from "./shipping-address.service";
import { ShippingAddress } from "./shipping-address.entity";

// Can be created with nest g module shipping-address

@Module({
    imports: [TypeOrmModule.forFeature([ShippingAddress])],
    controllers: [ShippingAddressController],
    providers: [ShippingAddressService]
})

export class ShippingAddressModule {}