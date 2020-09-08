import profile from '../../../controllers/mobile/account/m_profile';
import profileUpdate from '../../../controllers/mobile/account/m_mypage';
import {Router} from 'express';

const router = Router();

router.get('/', profile);
router.post('/', profileUpdate);

export default router;
