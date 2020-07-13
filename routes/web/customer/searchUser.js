import {Router} from 'express';
import searchUser from '../../../controllers/web/customer/searchUser';

const router = Router();
router.post('/', searchUser);

export default router;
