import { ACTIONS } from '../../constants';

/**
 *
 * @param validationSchema
 * @returns {function(*=): function(...[*]=)}
 */
export default function (validationSchema) {
  /**
   * @param {Action}action
   * @returns {function(req,res,next):void}
   */
  return (action = ACTIONS.CREATE) => {

    return async (req, res, next) => {
      try {
        req.userData = await validationSchema.validateAsync(req.body, {
          context: {
            isCreateMode: action === ACTIONS.CREATE,
          }
        });
        next();
      } catch (e) {
        next(e);
      }
    };

  };

}

