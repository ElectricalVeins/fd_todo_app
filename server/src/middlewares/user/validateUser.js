import {userSchema, eeee} from '../../utils/dataValidation/user.js';

function getUserValidateMW (isCreate = true) {

  return async (req, res, next) => {
    try {
      req.userData = await userSchema.validateAsync( req.body, {
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

export const validateUserDataOnCreate = getUserValidateMW();
export const validateUserDataOnUpdate = getUserValidateMWupd( false );

function getUserValidateMWupd () {

  return async (req, res, next) => {
    try {
      console.log('MW',userSchema);
      req.userData = await eeee.validateAsync( req.body, {

      } );
      next();
    } catch (e) {
      next( e );
    }
  };
}