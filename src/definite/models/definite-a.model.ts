import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Word } from '../../words/models/word.model';

@Entity()
export class DefiniteA {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  literal: string;

  @OneToMany(type => Word, word => word.literal)
  words: Word[]
}
