import validationSchemas from '../../utils/data_validation';

export default async function (req, res, next) {
  try {
    console.log(req);
    const { authorizationData: { id: userId } } = req;
console.log('1',req);
    const sequelizeQueryObject = await validationSchemas.tasksSchema.validateAsync(
      req.query);
    console.log('1');
    const { limit: limitState, offset: offsetState, isDone: isDoneState } = sequelizeQueryObject;
    console.log('1');
    const obj = {
      limit: limitState,
      offset: offsetState,
      where: {
        isDone: isDoneState,
        id: userId
      }
    };

    console.log('after req.q');
    console.log('AND  REQ.QUERY IS',obj);
    res.send(req.query);

    next();

  } catch (e) {
    next(e);
  }

}