import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class NotificationType {
  @PrimaryGeneratedColumn() id: number;

  @Column() name: string;

  @Column() description: string;

  @Column() template: string;
}
