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
import { ItemDetailsModule } from './item-details/item-details.module';
import { ItemDetails } from './item-details/item-details.entity';
import { WarehouseModule } from './warehouse/warehouse.module';
import { Warehouse } from './warehouse/warehouse.entity';
import { BinModule } from './bin/bin.module';
import { Bin } from './bin/bin.entity';
import { OrderModule } from './order/order.module';
import { Order } from './order/order.entity';
import { OrderLineItemsModule } from './order-line-items/order-line-items.module';
import { OrderLineItems } from './order-line-items/order-line-items.entity';
import { PurchaseOrder } from './purchase-order/purchase-order.entity';
import { PurchaseOrderModule } from './purchase-order/purchase-order.module';
import { PurchaseOrderLineItemsModule } from './purchase-order-line-items/purchase-order-line-items.module';
import { PurchaseOrderLineItems } from './purchase-order-line-items/purchase-order-line-items.entity';
import { CustomerModule } from './customer/customer.module';
import { Customer } from './customer/customer.entity';
import { DepartmentModule } from './department/department.module';
import { Department } from './department/department.entity';
import { EmployeeModule } from './employee/employee.module';
import { Employee } from './employee/employee.entity';
import { ReturnsModule } from './returns/returns.module';
import { Returns } from './returns/returns.entity';
import { Role } from './role/role.entity';
import { RoleModule } from './role/role.module';
import { UsersModule } from './users/users.module';
import { SubDepartmentModule } from './sub-department/sub-department.module';
import { Users } from './users/users.entity';
import { SubDepartment } from './sub-department/sub-department.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'user',
      password: 'password',
      database: 'WMS',
      entities: [ShippingAddress, BillingAddress, Item, ItemDetails, Warehouse, Bin, Order, OrderLineItems, PurchaseOrder, PurchaseOrderLineItems, Customer, Department, Employee, Returns, Role, Users, SubDepartment],
      synchronize: false // Do not use synchronize in production, otherwise you can lose data
    }),
    ShippingAddressModule,
    BillingAddressModule,
    ItemModule,
    ItemDetailsModule,
    WarehouseModule,
    BinModule,
    OrderModule,
    OrderLineItemsModule,
    PurchaseOrderModule,
    PurchaseOrderLineItemsModule,
    CustomerModule,
    DepartmentModule,
    EmployeeModule,
    ReturnsModule,
    RoleModule,
    UsersModule,
    SubDepartmentModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
