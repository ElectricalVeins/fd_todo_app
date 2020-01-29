import express from 'express';
import { createUser } from '../controllers/user.js';
import getUserValidateMW from '../middlewares/user/validateUser.js';
import { ACTIONS } from '../constants';

const userRouter = express.Router();

userRouter.post('/',
                getUserValidateMW(ACTIONS.CREATE),
                createUser);
userRouter.patch('/',
                getUserValidateMW(ACTIONS.UPDATE),
                );



export default userRouter;