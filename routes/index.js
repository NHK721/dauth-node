import account from "./web/account";

export default (app) => {
  const router = app;

  router.use("/web/account", account);
};
