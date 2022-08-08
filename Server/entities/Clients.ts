import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
} from "typeorm";

@Entity()
export class Client extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  codeClint: number;

  @Column()
  Name: string;

  @Column()
  City: string;

  @Column()
  State: string;

  @Column()
  Country: string;

  @Column()
  industryCodes: number;

  @Column()
  Active: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
