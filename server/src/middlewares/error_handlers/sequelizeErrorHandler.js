import { BaseError, ValidationError, UniqueConstraintError } from 'sequelize';

export default (err, req, res, next) => {

    switch (err) {
      case err instanceof UniqueConstraintError :
    res.status(400).send(
      `Error: ${err.errors[0].message}. This ${err.errors[0].path} was already registered.`);
        break;
      case err instanceof BaseError:
        res.status(400).send(err);
        break;
    }


/*  if (err instanceof UniqueConstraintError) {
    res.status(400).send(
      `Error: ${err.errors[0].message}. This ${err.errors[0].path} was already registered.`);
    return;
  }
  if (err instanceof BaseError) {
    res.status(400).send(err);
  }*/
  next(err);
}
