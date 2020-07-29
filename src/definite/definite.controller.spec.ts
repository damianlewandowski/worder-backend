import { Test, TestingModule } from '@nestjs/testing';
import { DefiniteController } from './definite.controller';

describe('Definite Controller', () => {
  let controller: DefiniteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DefiniteController],
    }).compile();

    controller = module.get<DefiniteController>(DefiniteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
