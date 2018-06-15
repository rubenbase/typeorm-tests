import "reflect-metadata";
import { createConnection } from "typeorm";
import { Users } from "./entity/User";
import { Profile } from "./entity/Profile";

createConnection()
  .then(async connection => {
    const profile = new Profile();
    profile.gender = "male";
    profile.photo = "me.jpg";
    profile.address = "Whatedscsd";
    profile.country = "Spain";
    profile.postalCode = "15003";
    await connection.manager.save(profile);

    const user = new Users();
    user.name = "ruben";
    user.email = "whatever@whatever.com";
    user.password = "whateverPassword";
    user.lastname = "costa";
    user.profile = profile;
    await connection.manager.save(user);
  })
  .catch(error => console.log(error));
