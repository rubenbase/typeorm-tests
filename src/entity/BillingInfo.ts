import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn
} from "typeorm";

import { Subscription } from "./Subscription";
import { User } from "./User";

@Entity()
export class BillingInfo {
  @PrimaryGeneratedColumn() id: number;

  @OneToOne(type => User, { primary: true })
  @JoinColumn()
  userId: User;

  @Column() nif: string;

  @Column() legalName: string;

  @Column() legalAddress1: string;

  @Column() legalAddress2: string;

  @Column() legalAddress3: string;

  @Column() legalAddressPostalCode: string;

  @Column() legalAddressLocality: string;

  @Column() legalCountry: string;

  @Column() iban: string;

  @Column() representativeBirthDate: string;

  @Column() representativeName: string;

  @Column() representativeLastName: string;

  @Column() stripeCustomerId: string;

  @Column() sourcesId: string;

  @Column() last4: string;

  @Column() brand: string;

  @Column() expMonth: string;

  @Column() expYear: string;

  @Column() vat: string;

  @Column() createdAt: string;

  // Need to FK this
  @Column() paymentMethods: string;

  @Column() bankAccount: string;

  @OneToOne(type => Subscription)
  @JoinColumn()
  subscriptionId: Subscription;
}
