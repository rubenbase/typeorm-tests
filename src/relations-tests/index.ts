module.exports = (connection: any) => {
  return (() => {
    /**********************************
          RUN THE RELATIONS => 1-to-1
      ***********************************/
    require("./one-to-one/user-profile.ts")(connection);

    /**********************************
          RUN THE RELATIONS => 1-to-N & vcvs
      ***********************************/

    /**********************************
          RUN THE RELATIONS => N-to-M
      ***********************************/

    return "All Relations Runned!";
  })();
};
