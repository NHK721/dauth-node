import account from "./account";

export default (app) => {
  const router = app;

  router.use("/account", account);
};
