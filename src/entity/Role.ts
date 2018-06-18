import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Role {
  @PrimaryGeneratedColumn() id: number;

  @Column() name: string;

  @Column("boolean", { default: true })
  active: boolean;

  @Column() parentRoleId: string;
}
