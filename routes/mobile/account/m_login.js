import {Router} from 'express';
import loginMobileAccount from '../../../controllers/mobile/account/m_login';

const router = Router();

router.post('/', loginMobileAccount);

export default router;
