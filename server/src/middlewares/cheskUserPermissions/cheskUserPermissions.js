import AppErrors from '../../utils/application_errors';
import { User } from '../../db/models';

/**
 *
 * @param {string} action
 * @returns {Promise<function(*): function(...[*]=)>}
 */
async function checkPerm (action) {

  return (object) => {

    return async (req, res, next) => {
      try {
        const { AuthorizationData: { id: actorId } } = req;
        const { roles } = (await User.findByPk(actorId)).get();
        next(new AppErrors.ForbiddenError());
      } catch (e) {
        next(e);
      }
    };
  };
}

//const checkCreateTaskPermissions = checkPerm('CREATE')('TASK');