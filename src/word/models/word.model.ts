import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne } from 'typeorm';
import { Language } from '../../language/models/language.model';
import { DefiniteThe } from '../../definite/models/definite-the.model';
import { DefiniteA } from '../../definite/models/definite-a.model';

@Entity()
export class Word {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  literal: string;

  @ManyToOne(type => Language, language => language.words)
  language: Language;

  @ManyToOne(type => DefiniteThe, definiteThe => definiteThe.literal)
  definiteThe: DefiniteThe

  @ManyToOne(type => DefiniteA, definiteA => definiteA.literal)
  definiteA: DefiniteA
}
