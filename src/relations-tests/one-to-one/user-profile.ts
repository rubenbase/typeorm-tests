import { User } from "./../../entity/User";
import { Profile } from "./../../entity/Profile";

module.exports = (connection: any) => {
  return (async () => {
    const profile = new Profile();
    profile.gender = "male";
    profile.photo = "me.jpg";
    profile.address = "Whatedscsd";
    profile.country = "Spain";
    profile.postalCode = "15003";
    await connection.manager.save(profile);

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
