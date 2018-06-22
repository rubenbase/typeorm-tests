import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class PaymentMethod {
  @PrimaryGeneratedColumn() id: number;

  @Column() name: string;
}
