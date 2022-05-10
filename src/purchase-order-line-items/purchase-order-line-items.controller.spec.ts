import { Test, TestingModule } from '@nestjs/testing';
import { PurchaseOrderLineItemsController } from './purchase-order-line-items.controller';

describe('PurchaseOrderLineItemsController', () => {
  let controller: PurchaseOrderLineItemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PurchaseOrderLineItemsController],
    }).compile();

    controller = module.get<PurchaseOrderLineItemsController>(PurchaseOrderLineItemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
