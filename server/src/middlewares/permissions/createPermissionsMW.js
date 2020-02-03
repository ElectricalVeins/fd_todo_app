import AppErrors from '../../utils/application_errors';

export default entity => action => async (req, res, next) => {
  try {



    next(new AppErrors.ForbiddenError());
  } catch (e) {
    next(e);
  }
};
