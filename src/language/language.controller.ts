import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Language } from './models/language.model';
import { LanguageService } from './language.service';

@Controller('language')
export class LanguageController {
  constructor(
    private languageService: LanguageService,
  ) {}

  @Post('')
  addLanguage(@Body() language: Language): Promise<any> {
    return this.languageService.addLanguage(language);
  }

  @Get(':id')
  getLanguage(@Param() id: number): Promise<any> {
    return this.languageService.getLanguage(id);
  }
}
