import {Router} from 'express';
import registerAdmin from '../../../controllers/web/account/register';

const router = Router();

router.post('/', registerAdmin);

export default router;
