import * as bcrypt from "bcryptjs";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  BeforeInsert
} from "typeorm";
import { Profile } from "./Profile";
import { BaseEntity } from "typeorm/repository/BaseEntity";

@Entity("users")
@Entity()
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn("uuid") id: string;

  @Column("varchar", { length: 255 })
  email: string;

  @Column("text") password: string;

  @Column() name: string;

  @Column() lastname: string;

  @Column("boolean", { default: false })
  confirmed: boolean;

  @Column("boolean", { default: false })
  forgotPasswordLocked: boolean;

  @OneToOne(type => Profile)
  @JoinColumn()
  profile: Profile;

  @BeforeInsert()
  async hashPasswordBeforeInsert() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
