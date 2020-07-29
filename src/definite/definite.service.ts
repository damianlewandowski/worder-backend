import { Injectable } from '@nestjs/common';
import { CreateDefiniteTheDto } from './dto/create-definite-the.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DefiniteThe } from './models/definite-the.model';
import { DefiniteA } from './models/definite-a.model';
import { CreateDefiniteADto } from './dto/create-definite-a.dto';

@Injectable()
export class DefiniteService {
  constructor(
    @InjectRepository(DefiniteThe)
    private definiteTheRepository: Repository<DefiniteThe>,
    @InjectRepository(DefiniteA)
    private definiteARepository: Repository<DefiniteA>,
  ) {}

  createDefiniteThe(createDefiniteTheDto: CreateDefiniteTheDto): Promise<any> {
    return this.definiteTheRepository.insert(createDefiniteTheDto)
  }

  createDefiniteA(createDefiniteADto: CreateDefiniteADto): Promise<any> {
    return this.definiteARepository.insert(createDefiniteADto)
  }
}
