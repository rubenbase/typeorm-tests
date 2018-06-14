import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn
} from "typeorm";
import { Profile } from "./Profile";
import { BaseEntity } from "typeorm/repository/BaseEntity";

@Entity("users")
@Entity()
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column() name: string;

  @Column({ nullable: true })
  surname: string;

  @Column("varchar", { length: 255, nullable: true })
  email: string;

  @OneToOne(type => Profile)
  @JoinColumn()
  profile: Profile;
}
