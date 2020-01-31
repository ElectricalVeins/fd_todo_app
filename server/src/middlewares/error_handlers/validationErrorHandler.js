import { ValidationError } from '@hapi/joi';

export default (err, req, res, next) => {
  if (err instanceof ValidationError) {
    const { details: [errorDetails] } = err;
    const label = errorDetails.context.label;
    return res.status(400).send(errorDetails.type === 'string.pattern.base'
                                ? `${label} with value \"${errorDetails.context.value}\" fails to match the required pattern`
                                : errorDetails.message);
  }
  next(err);
}