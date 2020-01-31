import taskSchema from '../../utils/data_validation';

function getTaskValidateMW (isCreate = true) {

  return async (req, res, next) => {
    try {
      req.body = await taskSchema.validateAsync( req.body, {
        context: {
          isCreate,
        }
      } );
      next();
    } catch (e) {

      next( e );

    }
  };
}

export const validateTaskOnCreate = getTaskValidateMW();
export const validateTaskOnUpdate = getTaskValidateMW( false );