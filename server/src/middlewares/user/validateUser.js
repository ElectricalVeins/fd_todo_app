import userSchema from '../../utils/dataValidation/index.js';
import { ACTIONS } from '../../constants';

export default async function getUserValidateMW (action) {

  return async function (req, res, next) {
    try {
      const { value } = await userSchema.validateAsync(req.body, {
        context: {
          isCreate: action === ACTIONS.CREATE
        }
      });
      req.userValue = value;
      next();
    } catch (e) {
      next(e);
    }
  };
}

