import { Test, TestingModule } from '@nestjs/testing';
import { SubDepartmentController } from './sub-department.controller';

describe('SubDepartmentController', () => {
  let controller: SubDepartmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubDepartmentController],
    }).compile();

    controller = module.get<SubDepartmentController>(SubDepartmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
