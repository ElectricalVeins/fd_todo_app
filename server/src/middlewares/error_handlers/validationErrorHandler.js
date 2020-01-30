import { ValidationError } from '@hapi/joi';

export default (err, req, res, next) => {
  if (err instanceof ValidationError) {
    const { details: [errorDetails] } = err;

    const label = errorDetails.context.label;
    let errorMessage = '';

    switch (errorDetails.type) {
      case 'any.required':
        errorMessage = `${label} is required`;
        break;
      case 'string.pattern.base':
        errorMessage = `${label} with value \"${errorDetails.context.value}\" fails to match the required pattern`;
        break;
      default:
        errorMessage = 'Validation failed';
        break;

    }

    return res.status(400).send(errorMessage);
  }
  next(err);
}