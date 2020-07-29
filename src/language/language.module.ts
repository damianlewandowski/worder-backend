import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Language } from './models/language.model';
import { LanguageService } from './language.service';
import { LanguageController } from './language.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Language])
  ],
  providers: [LanguageService],
  controllers: [LanguageController]
})
export class LanguageModule {}
