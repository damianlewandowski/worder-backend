import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateWordDto } from './dto/create-word.dto';
import { WordService } from './word.service';

@Controller('words')
export class WordController {
  constructor(
    private wordService: WordService,
  ) {}

  @Post('')
  addWord(@Body() createWordDto: CreateWordDto): Promise<any> {
    return this.wordService.addWord(createWordDto);
  }

  @Get(':id')
  getWord(@Param('id') id: number): Promise<any> {
    return this.wordService.getWord(id);
  }
}
