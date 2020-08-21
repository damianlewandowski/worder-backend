import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Word } from './models/word.model';
import { CreateWordDto } from './dto/create-word.dto';

@Injectable()
export class WordService {
  constructor(
    @InjectRepository(Word)
    private wordRepository: Repository<Word>,
  ) {}

  addWord(createWordDto: CreateWordDto): Promise<any> {
    return this.wordRepository.insert(createWordDto);
  }

  getWord(id: number): Promise<any> {
    return this.wordRepository
      .createQueryBuilder('words')
      .where('words.id = :id', { id })
      .leftJoin('words.definiteThe', 'definiteThe')
      .leftJoin('words.definiteA', 'definiteA')
      .addSelect(['definiteThe.literal', 'definiteA.literal'])
      .getOne();
  }
}
