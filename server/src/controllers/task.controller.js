import { Task } from '../db/models';
import AppErrors from '../utils/application_errors';

export async function createTask (req, res, next) {
  try {
    const { authorizationData: { id: userId } } = req;
    const { body: taskData } = req;

    const createdTask = await Task.create({
                                            ...taskData,
                                            userId
                                          });

    return res.status(201).send(createdTask.get());

  } catch (e) {
    next(e);
  }
}

export async function getTask (req, res, next) {
  try {
    const { params: { taskId } } = req;

    const task = await Task.findByPk(taskId);
    if (task) {
      return res.send(task);
    }
    next(new AppErrors.NotFoundError('Task'));

  } catch (e) {
    next(e);
  }
}

export async function updateTask (req, res, next) {
  try {

  } catch (e) {
    next(e);
  }
}

export async function deleteTask (req, res, next) {
  try {

  } catch (e) {
    next(e);
  }
}