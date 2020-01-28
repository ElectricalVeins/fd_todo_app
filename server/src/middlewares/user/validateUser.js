import {
  updateUserSchema,
  createUserSchema
} from '../../utils/dataValidation/index.js';

export default async function (req, res, next) {
  try {
    await (req.method === 'POST'
           ? createUserSchema
           : updateUserSchema).validateAsync(req.body);
    next();
  } catch (e) {
    next(e);
  }
}