import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Word } from '../../word/models/word.model';

@Entity()
export class DefiniteThe {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  literal: string;

  @OneToMany(type => Word, word => word.literal)
  words: Word[]
}
