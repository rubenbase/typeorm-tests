import { NotificationType } from "./NotificationType";
import { User } from "./User";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn
} from "typeorm";

@Entity()
export class Notification {
  @PrimaryGeneratedColumn() id: number;

  @Column("boolean") deleted: boolean;

  @Column("boolean") read: boolean;

  @Column() url: string;

  // ??????????????? see later how to handle this
  @Column() additionalData: string;

  @OneToOne(type => NotificationType)
  @JoinColumn()
  notificationTypeId: NotificationType;

  @OneToOne(type => User)
  @JoinColumn()
  senderId: User;

  @OneToOne(type => User)
  @JoinColumn()
  recipientId: User;
}
