import express from 'express';
import { createTask, getTask } from '../controllers/task.controller.js';
import createValidationMW
  from '../middlewares/validations/createValidationMW.js';
import { ACTIONS } from '../constants';
import validationSchemas from '../utils/data_validation';

const taskRouter = express.Router();
const createTaskValidationMW = createValidationMW(validationSchemas.taskSchema);

taskRouter.post('/',
                createTaskValidationMW(ACTIONS.CREATE),
                createTask);

taskRouter.get('/:taskId',
               getTask
);

taskRouter.patch('/:taskId',
                 createTaskValidationMW(ACTIONS.UPDATE)
);

taskRouter.delete('/:taskId',);

export default taskRouter;