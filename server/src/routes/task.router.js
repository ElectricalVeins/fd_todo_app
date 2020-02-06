import express from 'express';
import {createTask, getTask} from '../controllers/task.controller.js';
import createValidationMW
    from '../middlewares/validations/createValidationMW.js';
import {ACTIONS, ENTITIES} from '../constants';
import validationSchemas from '../utils/data_validation';
import createPermissionMw
    from '../middlewares/permissions/createPermissionsMW.js';
import {deleteTask, updateTask} from "../controllers/task.controller";

const taskRouter = express.Router();

const createTaskPermissionMW = createPermissionMw(ENTITIES.TASK);
const createTaskValidationMW = createValidationMW(validationSchemas.taskSchema);

taskRouter.post('/',
   // createTaskPermissionMW(ACTIONS.CREATE),
    createTaskValidationMW(ACTIONS.CREATE),
    createTask);

taskRouter.get('/:taskId',
 //   createTaskPermissionMW(ACTIONS.READ),
    getTask
);

taskRouter.patch('/:taskId',
  //  createTaskPermissionMW(ACTIONS.UPDATE),
    createTaskValidationMW(ACTIONS.UPDATE),
    updateTask
);

taskRouter.delete('/:taskId',
  //  createTaskPermissionMW(ACTIONS.DELETE),
    deleteTask
);

export default taskRouter;