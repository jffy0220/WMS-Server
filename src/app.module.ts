import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { ShippingAddress } from './shipping-address/shipping-address.entity';
import { ShippingAddressModule } from './shipping-address/shipping-address.module';
import { BillingAddressModule } from './billing-address/billing-address.module';
import { BillingAddress } from './billing-address/billing-address.entity';
import { ItemModule } from './item/item.module';
import { Item } from './item/item.entity';
import { ItemDetailsController } from './item-details/item-details.controller';
import { ItemDetailsService } from './item-details/item-details.service';
import { ItemDetailsModule } from './item-details/item-details.module';
import { ItemDetails } from './item-details/item-details.entity';
import { WarehouseController } from './warehouse/warehouse.controller';
import { WarehouseService } from './warehouse/warehouse.service';
import { WarehouseModule } from './warehouse/warehouse.module';
import { Warehouse } from './warehouse/warehouse.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'user',
      password: 'password',
      database: 'WMS',
      entities: [ShippingAddress, BillingAddress, Item, ItemDetails, Warehouse],
      synchronize: false // Do not use synchronize in production, otherwise you can lose data
    }),
    ShippingAddressModule,
    BillingAddressModule,
    ItemModule,
    ItemDetailsModule,
    WarehouseModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
