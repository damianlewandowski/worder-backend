import { Body, Controller, Get, Param, Post, Request, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtAuthGuard } from '../auth/guard/jwt-auth-guard';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {
  }

  @Post('register')
  insert(@Body() createUserDto: CreateUserDto): Promise<any> {
    return this.usersService.insert(createUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req): Promise<any> {
    return req.user;
  }
}
