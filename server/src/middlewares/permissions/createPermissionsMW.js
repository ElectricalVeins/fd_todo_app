import AppErrors from '../../utils/application_errors';

export default object => action => async (req, res, next) => {
  try {



    next(new AppErrors.ForbiddenError());
  } catch (e) {
    next(e);
  }
};
