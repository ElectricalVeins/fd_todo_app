import AppError from '../../utils/application_errors';

export default async function (req, res, next) {
  try {

    const actorId = req.get('Authorization');

    if (actorId) {

      req.authorizeData = {
        id: actorId,
      };
      next();
    } else {
      next(new AppError.UnauthorizedError());
    }

  } catch (e) {
    next(e);
  }

}