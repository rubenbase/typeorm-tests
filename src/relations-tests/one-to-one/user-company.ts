import { Company } from "./../../entity/Company";
import { User } from "./../../entity/User";

module.exports = (connection: any) => {
  return (async () => {
    const company = new Company();
    company.name = "Company Name Example";
    company.cif = "342142";
    company.address = "Red Rose Street CA ";
    company.country = "Spain";
    company.postalCode = "54008";
    await connection.manager.save(company);

    const user = new User();
    user.name = "manolo";
    user.email = "whatever@whatever.com";
    user.password = "whateverPassword";
    user.lastname = "martinez";
    user.profile = profile;
    await connection.manager.save(user);

    return "User-Profile Relation Runned !";
  })();
};
// PrimaryGeneratedColumn() id: number;
// @Column() name: string;
// @Column() cif: string;
// @Column() address: string;
// @Column() country: string;
// @Column() postalCode: string;
