import account from './web/account/login';
import register from './web/account/register';
import commodity from './web/commodity/upload';
import m_account from './mobile/account/m_login';
import m_register from './mobile/account/m_register';
import searchUser from './web/customer/searchUser';
import m_profile from './mobile/account/m_profile';

export default (app) => {
  const router = app;
  router.use('/account/web/login', account);
  router.use('/account/web/register', register);
  router.use('/account/mobile/m_login', m_account);
  router.use('/account/mobile/m_register', m_register);
  router.use('/account/mobile/m_profile', m_profile);
  router.use('/customer/web/searchuser', searchUser);
  router.use('/commodity/web/upload', commodity);
};
