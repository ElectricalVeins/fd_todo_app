import express from 'express';
import { getTasks } from '../controllers/task.controller.js';
import createSequelizeQueryObjectMW
  from '../middlewares/queryFilter/createSequelizeQueryObjectMW.js';


const tasksRouter = express.Router();

tasksRouter.get('',
                createSequelizeQueryObjectMW,
                getTasks);

export default tasksRouter;