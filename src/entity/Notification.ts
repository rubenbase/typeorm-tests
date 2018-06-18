import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Notification {
  @PrimaryGeneratedColumn() id: number;

  @Column("boolean") deleted: boolean;

  @Column("boolean") read: boolean;

  @Column() url: string;

  // ??????????????? see later how to handle this
  @Column() additionalData: string;

  //FKS
  @Column() notificationTypeId: string;

  @Column() senderId: string;

  @Column() recipientId: string;
}
