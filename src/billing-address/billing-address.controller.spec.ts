import { Test, TestingModule } from '@nestjs/testing';
import { BillingAddressController } from './billing-address.controller';

describe('BillingAddressController', () => {
  let controller: BillingAddressController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BillingAddressController],
    }).compile();

    controller = module.get<BillingAddressController>(BillingAddressController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
