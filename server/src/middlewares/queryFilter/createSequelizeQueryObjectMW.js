import validationSchemas from '../../utils/data_validation';

export default async function (req, res, next) {
  try {
    const { authorizationData: { id: userId } } = req;

    const sequelizeQueryObject = await validationSchemas.tasksSchema.validateAsync(
      req.query);

    const { limit: limitState, offset: offsetState, isDone: isDoneState } = sequelizeQueryObject;

      req.query = {
      limit: limitState,
      offset: offsetState,
      where: {
        isDone: isDoneState,
        userId: userId
      }
    };

    next();

  } catch (e) {
    next(e);
  }

}