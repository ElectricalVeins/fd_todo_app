import { Task } from '../db/models';
import AppErrors from '../utils/application_errors';

export async function createTask (req, res, next) {
  try {
    const { authorizationData: { id: userId } } = req;
    const { body: taskData } = req;

    console.log(userId);
    console.log(taskData);

    const createdTask = await Task.create({
                                            ...taskData,
                                            userId
                                          });
    console.log(createdTask);
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
    const { params: { taskId } } = req;

    const [updatedRowsCount, [updatedTask]] = await Task.update( {
      where: {
        id: taskId
      },
      returning: true
    } );
    if (updatedRowsCount) {
      return res.send( updatedTask );
    }
    next( new AppErrors.NotFoundError( 'Task' ) );

  } catch (e) {
    next( e );
  }
}

export async function deleteTask (req, res, next) {
  try {
    const { params: { taskId } } = req;

    const deletedRowsCount = await Task.destroy( {
      where: {
        id: taskId
      }
    } );
    if (deletedRowsCount) {
      return res.send( {
        deletedRowsCount,
      } );
    }
    next( new AppErrors.NotFoundError( 'Task' ) );

  } catch (e) {
    next( e );
  }
}

export async function getTasks (req, res, next) {
  try {

    //res.send(req.query);

    const tasks = await Task.findAll(req.query);

    res.send(tasks);
  } catch (e) {
    next(e);
  }
}

//isDone,offset,limit,deadline(?)
//