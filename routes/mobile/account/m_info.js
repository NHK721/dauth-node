import {Router} from 'express';
import {getUserInfo} from '../../../controllers/mobile/account/m_user_info';

const router = Router();

router.get('/', getUserInfo);

export default router;
