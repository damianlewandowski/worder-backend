import {
  Controller,
  Post,
  UseGuards,
  Request,
  Get,
  Body,
} from '@nestjs/common';
import { LocalAuthGuard } from './auth/guard/local-auth-guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/guard/jwt-auth-guard';
import { IToken } from './auth/model/token.interface';
import { LanguageService } from './language/language.service';
import { CreateLanguageDto } from './language/dto/create-language.dto';
import { Language } from './language/models/language.model';

@Controller()
export class AppController {
  constructor(
    private authService: AuthService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req): Promise<IToken> {
    return this.authService.login(req.user);
  }

  @Post('auth/login/token')
  async refreshToken(@Body('refresh_token') refreshToken): Promise<IToken> {
    return this.authService.refreshToken(refreshToken);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req): Promise<any> {
    return req.user;
  }
}
