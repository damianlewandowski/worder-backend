import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Word } from './models/word.model';
import { WordService } from './word.service';
import { WordController } from './word.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Word])
  ],
  controllers: [WordController],
  providers: [WordService],
})
export class WordModule {}
