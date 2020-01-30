import { BaseError } from 'sequelize';

export default (err, req, res, next) => {
  if (err instanceof BaseError) {
    res.status(400).send(`SEQUELIZE ERROR ${err}`);
  }
  next(err);
}