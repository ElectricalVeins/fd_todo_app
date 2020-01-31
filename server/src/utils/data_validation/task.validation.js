/*
const Joi = require('@hapi/joi')
.extend(require('@hapi/joi-date'));

const valueSchema = Joi.string().pattern();
const deadlineSchema = Joi.date().format('YYYY-MM-DD').utc();

export default Joi.object({
                            value: valueSchema.label('Value').when('$isCreate', {
                                                                     then: valueSchema.required(),
                                                                   }),
                            deadline: deadlineSchema.label('deadline').when(
                              '$isCreate', {
                                then: deadlineSchema.required()
                              })
                          }).min(1).max(4);*/
