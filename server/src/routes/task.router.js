import express from 'express';
import {
  validateTaskOnCreate,
  validateTaskOnUpdate
} from '../middlewares/task/validateTask.js';
import { createTask, getTask } from '../controllers/task.controller.js';

const taskRouter = express.Router();


taskRouter.post('/',
               validateTaskOnCreate,
                createTask);

taskRouter.get('/:taskId',
               getTask
);

taskRouter.patch('/:taskId',
                 validateTaskOnUpdate
                 );

taskRouter.delete('/:taskId',);


export default taskRouter;