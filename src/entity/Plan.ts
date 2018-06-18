import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Plan {
  @PrimaryGeneratedColumn() id: number;

  @Column() name: string;

  @Column() description: string;

  @Column("double") price_per_year: number;

  @Column("double") price_per_month: number;

  @Column() duration: number;
}
