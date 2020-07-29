import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CatsModule } from './cats/cats.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LanguageModule } from './language/language.module';
import { DefiniteModule } from './definite/definite.module';
import { WordModule } from './word/word.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'damian',
      password: 'password',
      database: 'worder',
      synchronize: true,
      autoLoadEntities: true
    }),
    AuthModule,
    UsersModule,
    CatsModule,
    LanguageModule,
    DefiniteModule,
    WordModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
