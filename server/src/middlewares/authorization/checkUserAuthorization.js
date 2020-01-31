import AppError from '../../utils/application_errors';

export default async function (req, res, next) {
  try {
    req.authorizeData = req.get('Authorization');
    if (req.authorizeData) {
      return next();
    } else {
      next(new AppError.UnauthorizedError())
      ;
    }

  } catch (e) {
    next(e);
  }
}