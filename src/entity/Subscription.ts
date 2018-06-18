import {
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  Column
} from "typeorm";

import { DeclineReason } from "./DeclineReason";
import { Plan } from "./Plan";

@Entity()
export class Subscription {
  @PrimaryGeneratedColumn() id: number;

  @Column("boolean") active: boolean;

  @Column() app: string;

  @Column("timestamp") createdAt: Date;

  @Column("timestamp") cancelationDate: Date;

  @Column({ nullable: true })
  renewed: boolean;

  @OneToOne(type => Plan)
  @JoinColumn()
  planId: Plan;

  @OneToOne(type => DeclineReason)
  @JoinColumn()
  declineReasonId: DeclineReason;
}
