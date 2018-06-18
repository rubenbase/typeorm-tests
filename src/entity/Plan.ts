import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Plan {
  @PrimaryGeneratedColumn() id: number;

  @Column() name: string;

  @Column() description: string;

  @Column("float") pricePerYear: number;

  @Column("float") pricePerMonth: number;

  @Column() duration: number;
}
