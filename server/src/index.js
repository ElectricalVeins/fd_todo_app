import { User, Task } from './db/models';

async function getAllUsersWithTasks () {
  try {

    const users = await User.findAll({
                                       include: [
                                         {
                                           model: Task,
                                           as: 'tasks'
                                         }]
                                     });
    return users.map(user => user.toJSON());
  } catch (e) {
    throw new Error();
  }
}

//getAllUsersWithTasks().then(console.log).catch(console.error);

async function getAllTasksWithOwner () {
  try {
    const tasks = await Task.findAll({
                                       where: {isDone:false},
                                       include: [
                                         {
                                           model: User,
                                           as: 'owner'
                                         }],exclude:{passwordHash}
                                     });
    return tasks.map(user => user.toJSON());

  } catch (e) {
    throw new Error();
  }
}

getAllTasksWithOwner().then(console.log);