import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class DeclineReason {
  @PrimaryGeneratedColumn() id: number;

  @Column() description: string;
}
