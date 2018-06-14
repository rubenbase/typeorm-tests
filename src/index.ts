import "reflect-metadata";
import { createConnection } from "typeorm";
import { Users } from "./entity/User";
import { Profile } from "./entity/Profile";

createConnection()
  .then(async connection => {
    const profile = new Profile();
    profile.gender = "undefined";
    profile.photo = "me.jpg";
    await connection.manager.save(profile);

    const user = new Users();
    user.name = "ruben";
    user.profile = profile;
    await connection.manager.save(user);
  })
  .catch(error => console.log(error));
