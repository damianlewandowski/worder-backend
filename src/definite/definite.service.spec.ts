import { Test, TestingModule } from '@nestjs/testing';
import { DefiniteService } from './definite.service';

describe('DefiniteService', () => {
  let service: DefiniteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DefiniteService],
    }).compile();

    service = module.get<DefiniteService>(DefiniteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
