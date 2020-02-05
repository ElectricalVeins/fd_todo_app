import AppErrors from '../../utils/application_errors';

export default entity => action => async (req, res, next) => {
  try {

    if (actor.roles.some(role => RULES_PERMISSION.get(role).get(action).every(
      entity => entity.checkPermission(entity, req.body)))) {

    } else {

      next(new AppErrors.ForbiddenError());
    }

  } catch (e) {
    next(e);
  }
};

