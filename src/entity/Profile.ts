import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Profile {
  @PrimaryGeneratedColumn() id: number;

  @Column() gender: string;

  @Column({ nullable: true })
  photo: string;

  @Column() address: string;

  @Column() country: string;

  @Column() postalCode: string;
}
