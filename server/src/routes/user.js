import express from 'express';
import { createUser, deleteUserByPk, getUserByPk, updateUser } from '../controllers/user.js';
import { validateUserDataOnCreate, validateUserDataOnUpdate } from '../middlewares/user/validateUser.js';

const userRouter = express.Router();

userRouter.post( '/',
                 validateUserDataOnCreate,
                 createUser
);

userRouter.get( '/:userId',
                getUserByPk,
);

userRouter.patch( '/:userId',
                  validateUserDataOnUpdate,
                  updateUser
);

userRouter.delete( '/:userId',
                   deleteUserByPk
);

//CR +

//UD +\-
// Update проблема в userSchema;
// Delete проблема в БД(у пользователя есть "tasks"(ON DELETE CASCADE выставить))

export default userRouter;