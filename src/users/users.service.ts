import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.model';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  private readonly users: any[];

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {
    this.users = [
      {
        userId: 1,
        email: 'damian',
        password: 'changeme',
      },
      {
        userId: 2,
        email: 'chris',
        password: 'secret',
      },
      {
        userId: 3,
        email: 'maria',
        password: 'guess',
      },
    ];
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(email: string): Promise<User> {
    return this.usersRepository.findOne({ where: { email } });
  }

  async remove(id: string): Promise<any> {
    return await this.usersRepository.delete(id);
  }

  async insert(createUserDto: CreateUserDto): Promise<any> {
    const user = {
      email: createUserDto.email,
      password: await bcrypt.hash(createUserDto.password, parseInt(process.env.SALT_ROUNDS))
    }
    return this.usersRepository.insert(user);
  }
}
