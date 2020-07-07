import account from "./web/account/login";
import register from "./web/account/register";

export default (app) => {
  const router = app;

  router.use("/account/web/login", account);
  router.use("/account/web/register", register);
};
