import {Router} from 'express';
import registerMobileAdmin from '../../../controllers/mobile/account/m_register';

const router = Router();

router.post('/', registerMobileAdmin);

export default router;
