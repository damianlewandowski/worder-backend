import { Injectable } from '@nestjs/common';
import { CreateLanguageDto } from './dto/create-language.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Language } from './models/language.model';

@Injectable()
export class LanguageService {

  constructor(
    @InjectRepository(Language)
    private languageRepository: Repository<Language>,
  ) {}

  addLanguage(language: CreateLanguageDto): Promise<any> {
    return this.languageRepository.insert(language);
  }

  getLanguage(id: number): Promise<any> {
    return this.languageRepository.findOne(id, {relations: ['words']});
  }
}
