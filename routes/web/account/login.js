import {Router} from 'express';
import loginAccount from '../../../controllers/web/account/login';

const router = Router();

router.post('/', loginAccount);

export default router;
