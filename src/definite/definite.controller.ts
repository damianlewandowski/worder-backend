import { Body, Controller, Post } from '@nestjs/common';
import { DefiniteService } from './definite.service';
import { CreateDefiniteTheDto } from './dto/create-definite-the.dto';
import { CreateDefiniteADto } from './dto/create-definite-a.dto';

@Controller('definite')
export class DefiniteController {
  constructor(
    private definiteService: DefiniteService,
  ) {}

  @Post('the')
  createDefiniteThe(@Body() createDefiniteTheDto: CreateDefiniteTheDto): Promise<any> {
    return this.definiteService.createDefiniteThe(createDefiniteTheDto);
  }

  @Post('a')
  createDefiniteA(@Body() createDefiniteADto: CreateDefiniteADto): Promise<any> {
    return this.definiteService.createDefiniteA(createDefiniteADto);
  }
}
