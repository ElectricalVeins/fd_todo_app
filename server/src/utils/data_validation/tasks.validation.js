import Joi from '@hapi/joi';

export default Joi.object({
                            offset: Joi.number(),
                            limit: Joi.number(),
                            isDone: Joi.boolean(),
                            deadline: Joi.date(),
                          }).min(1).max(4);
