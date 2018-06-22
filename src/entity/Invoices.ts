import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class {
  @PrimaryGeneratedColumn() id: number;

  @Column() description: string;
}
