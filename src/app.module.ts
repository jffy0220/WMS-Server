import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { ShippingAddressController } from './shipping-address/shipping-address.controller';
import { ShippingAddress } from './shipping-address/shipping-address.entity';
import { ShippingAddressService } from './shipping-address/shipping-address.service';
import { ShippingAddressModule } from './shipping-address/shipping-address.module';
import { BillingAddressController } from './billing-address/billing-address.controller';
import { BillingAddressModule } from './billing-address/billing-address.module';
import { BillingAddress } from './billing-address/billing-address.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'user',
      password: 'password',
      database: 'WMS',
      entities: [ShippingAddress, BillingAddress],
      synchronize: false // Do not use synchronize in production, otherwise you can lose data
    }),
    ShippingAddressModule,
    BillingAddressModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}