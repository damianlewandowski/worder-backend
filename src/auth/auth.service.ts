import { ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { IToken } from './model/token.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    console.log('wut');
    if (user && await bcrypt.compare(password, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    throw new ForbiddenException('Wrong email or password')
  }

  async login(user: any): Promise<IToken> {
    const payload = { email: user.email };
    return this.generateToken(payload);
  }

  generateToken(payload: Record<string, unknown>): IToken {
    const jwtToken = this.jwtService.sign(payload, { expiresIn: `${process.env.JWT_TOKEN_EXPIRATION}s` });
    const refreshToken = this.jwtService.sign(payload, { expiresIn: `${process.env.JWT_REFRESH_TOKEN_EXPIRATION}s` });
    return {
      jwt_token: jwtToken,
      refresh_token: refreshToken,
    };
  }

  refreshToken(token: string): IToken {
    try {
      const { email } = this.jwtService.verify(token);
      console.log(email);
      return this.generateToken({ email });
    } catch (e) {
      throw new UnauthorizedException(e);
    }
  }
}
