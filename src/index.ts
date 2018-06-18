import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";
import { Profile } from "./entity/Profile";

createConnection()
  .then(async connection => {
    // Run Relations
    require("./relations-tests/index.ts")(connection);
  })
  .catch(error => console.log(error));
