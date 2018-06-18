import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Company {
  @PrimaryGeneratedColumn() id: number;

  @Column() name: string;

  @Column() cif: string;

  @Column() address: string;

  @Column() country: string;

  @Column() postalCode: string;
}
