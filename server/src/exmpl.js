import { creditCard, sequelize, User, Task } from './db/models';

/*

 async function getAllUsersWithTasks () {
 try {

 const users = await User.findAll({
 include: [
 {
 model: Task, as: 'tasks',
 }],
 })
 return users.map(user => user.toJSON())
 } catch (e) {
 throw new Error()
 }
 }

//getAllUsersWithTasks().then(console.log).catch(console.error);

 async function getAllTasksWithOwner () {
 try {
 const tasks = await Task.findAll({
 where: { isDone: false }, include: [
 {
 model: User, as: 'owner',
 }], attributes: { exclude: ['passwordHash'] },
 })
 return tasks.map(user => user.toJSON())

 } catch (e) {
 throw new Error()
 }
 }


//getAllTasksWithOwner().then(console.log);

async function getAllUsersWithUnDoneTasks () {
  try {
    const users = await User.findAll({
      order: ['id'],
      attributes: {
        exclude: ['passwordHash'],
      },
      include: [{
          model: Task, as: 'tasks',
        where: {
            isDone: false,
          },
        }],
    })

    return users.map(user => user.toJSON())
  } catch (e) {
    throw new Error()
  }
}

getAllUsersWithUnDoneTasks().then(console.log)

//getAllUsersWithSoonDeadline

//getAllUsersWithTasksInSomeMonth*/
/*
/!**
 *
 * @param {any}fromCardID
 * @param {any}toCardID
 * @param {number}value
 * @returns {Promise<void>}
 *!/
async function transaction (fromCardID, toCardID, value) {
  if (value > 0) {
    const fromCard = await creditCard.findByPk(fromCardID);
    const toCard = await creditCard.findByPk(toCardID);
    if (fromCard && toCard) {
      const t = await sequelize.transaction();
      const updatedFromCard = await fromCard.update({
                                                      balance: fromCard.get().balance -
                                                               value,
                                                      transaction: t,
                                                    });
      if (updatedFromCard.balance < 0) {
        await t.rollback();
        throw new Error();
      }
      await toCard.update({
                            balance: toCard.get().balance + value,
                            transaction: t,
                          });
      await t.commit();

    }

  }
}

transaction(1, 2, 500000).then(console.log).catch(console.error);
*/

/*
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/user', async (req, res) => {
  try {
    const createdUser = await User.create(req.body);

    res.send(createdUser);
  } catch (e) {
    next(e);
  }

});
*/
/*app.use((err, req, res, next) => {
  res.status(500).send('smthng broke!');
});
*/