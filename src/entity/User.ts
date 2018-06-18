import * as bcrypt from "bcryptjs";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  BeforeInsert,
  CreateDateColumn
} from "typeorm";
import { Profile } from "./Profile";
import { BaseEntity } from "typeorm/repository/BaseEntity";
import { Company } from "./Company";

@Entity("users")
@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid") id: string;

  @Column() name: string;

  @Column() lastname: string;

  @Column("varchar", { length: 255 })
  email: string;

  @Column("text") password: string;

  @CreateDateColumn({ type: "timestamptz" })
  createdAt: Date;

  // @UpdateDateColumn({ type: 'timestamptz' })
  // createdAt: Date;

  // @Column("timestamp") createdAt: Date;

  @Column("boolean", { default: true })
  active: boolean;

  @Column("boolean", { default: false })
  forgotPasswordLocked: boolean;

  @OneToOne(type => Profile)
  @JoinColumn()
  profile: Profile;

  @OneToOne(type => Company, { nullable: true })
  @JoinColumn()
  company: Company;

  @BeforeInsert()
  async hashPasswordBeforeInsert() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
