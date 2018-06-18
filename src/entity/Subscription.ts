import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Subscription {
  @PrimaryGeneratedColumn() id: number;

  @Column("boolean") active: boolean;

  @Column() app: string;

  @Column("timestamp") createdAt: Date;

  @Column("timestamp") cancelationDate: Date;

  @Column({ nullable: true })
  renewed: boolean;

  //faltan fk
  @Column() planId: string;

  @Column() declinedReasonId: number;
}
