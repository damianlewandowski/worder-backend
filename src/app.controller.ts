import {
  Controller,
  Post,
  UseGuards,
  Request,
  Get,
  Body, Logger,
} from '@nestjs/common';
import { LocalAuthGuard } from './auth/guard/local-auth-guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/guard/jwt-auth-guard';
import { IToken } from './auth/model/token.interface';
import { LanguageService } from './languages/language.service';
import { CreateLanguageDto } from './languages/dto/create-language.dto';
import { Language } from './languages/models/language.model';
import { UsersService } from './users/users.service';

@Controller()
export class AppController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService
  ) {}

  private readonly logger = new Logger(AppController.name);

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user)
  }

  @Post('auth/login/token/refresh')
  async refreshToken(@Body('refresh_token') refreshToken): Promise<IToken> {
    return this.authService.refreshToken(refreshToken);
  }
}
