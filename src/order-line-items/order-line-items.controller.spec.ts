import { Test, TestingModule } from '@nestjs/testing';
import { OrderLineItemsController } from './order-line-items.controller';

describe('OrderLineItemsController', () => {
  let controller: OrderLineItemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderLineItemsController],
    }).compile();

    controller = module.get<OrderLineItemsController>(OrderLineItemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
