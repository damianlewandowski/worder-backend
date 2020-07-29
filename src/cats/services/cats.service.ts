import { Injectable } from '@nestjs/common';
import { ICat } from '../interfaces/Cat.interface';
import { CreateCatDto } from '../dto/create-cat.dto';
import { v4 } from 'uuid';
import { UpdateCatDto } from '../dto/update-cat.dto';

@Injectable()
export class CatsService {
  private readonly cats: ICat[] = [];

  create(createCatDto: CreateCatDto): ICat {
    const id = v4();
    const cat = { id, ...createCatDto };
    this.cats.push(cat);
    return cat;
  }

  findAll(): ICat[] {
    return this.cats;
  }

  findOne(id: string): ICat {
    return this.cats.find(cat => cat.id === id);
  }

  update(id: string, updateCatDto: UpdateCatDto): ICat {
    const cat = this.cats.find(cat => cat.id === id);
    const updatedCat = { ...cat, ...updateCatDto };
    const i = this.cats.findIndex(c => c.id === id);
    this.cats.splice(i, 1, updatedCat);
    return updatedCat;
  }

  delete(id: string): ICat {
    const i = this.cats.findIndex(c => c.id === id);
    return this.cats.splice(i, 1)[0];
  }
}
