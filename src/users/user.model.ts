import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  // This is not a PK to keep consistency (numerical id is a PK everywhere else)
  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ nullable: false })
  password: string;
}
