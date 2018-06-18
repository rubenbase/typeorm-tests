import { User } from "./../../entity/User";
import { Profile } from "./../../entity/Profile";
import { Company } from "../../entity/Company";

module.exports = (connection: any) => {
  return (async () => {
    // PROFILE CREATION
    const profile = new Profile();
    profile.gender = "male";
    profile.photo = "me.jpg";
    profile.address = "Whatedscsd";
    profile.country = "Spain";
    profile.postalCode = "15003";
    await connection.manager.save(profile);

    // COMPANY CREATION
    const company = new Company();
    company.name = "Company Name Example";
    company.cif = "342142";
    company.address = "Red Rose Street CA ";
    company.country = "Spain";
    company.postalCode = "54008";
    await connection.manager.save(company);

    // USER CREATION
    const user = new User();
    user.name = "manolo";
    user.lastname = "martinez";
    user.email = "whatever@whatever.com";
    user.password = "whateverPassword";
    user.profile = profile;
    user.company = company;
    await connection.manager.save(user);

    return "User-Profile Relation Runned !";
  })();
};
