import express from 'express';
import {
  createUser,
  deleteUserByPk,
  getUserByPk,
  updateUser
} from '../controllers/user.controller.js';
import createPermissionMw from '../middlewares/permissions/createPermissionsMW.js'
import createValidationMW
  from '../middlewares/validations/createValidationMW.js';
import validationSchemas from '../utils/data_validation';
import { ACTIONS, ENTITIES } from '../constants';


const userRouter = express.Router();

const createUserPermissionsMW = createPermissionMw(ENTITIES.USER);
const createUserValidationMW = createValidationMW(validationSchemas.userSchema);


userRouter.post('/',
                //createUserPermissionsMW(ACTIONS.CREATE),
                createUserValidationMW(ACTIONS.CREATE),
                createUser
);

userRouter.get('/:userId',
               //createUserPermissionsMW(ACTIONS.READ),
               getUserByPk,
);

userRouter.patch('/:userId',
                // createUserPermissionsMW(ACTIONS.UPDATE),
                 createUserValidationMW(ACTIONS.UPDATE),
                 updateUser
);

userRouter.delete('/:userId',
                 // createUserPermissionsMW(ACTIONS.DELETE),
                  deleteUserByPk
);

export default userRouter;