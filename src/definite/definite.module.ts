import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DefiniteA } from './models/definite-a.model';
import { DefiniteThe } from './models/definite-the.model';
import { DefiniteController } from './definite.controller';
import { DefiniteService } from './definite.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([DefiniteA,  DefiniteThe])
  ],
  controllers: [DefiniteController],
  providers: [DefiniteService],
})
export class DefiniteModule {}
