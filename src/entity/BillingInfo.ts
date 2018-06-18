import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class BillingInfo {
  @PrimaryGeneratedColumn() id: number;

  //falta poner de pk el userid

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

  @Column() paymentMethods: string;

  @Column() bankAccount: string;

  // fk, falta hacer una relaicon
  @Column() subscriptionId: string;
}
