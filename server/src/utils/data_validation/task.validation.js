import Joi from '@hapi/joi';

const valueSchema = Joi.string().trim().min(1).max(255).label('Value');
const deadlineSchema = Joi.date().greater('now').label('deadline');

export default Joi.object({
    isDone: Joi.boolean().label('Is done').optional(),
    value: valueSchema.when('$isCreateMode', {
        then: valueSchema.required(),
    }),
    deadline: deadlineSchema.when('$isCreateMode', {
            then: deadlineSchema.required()
        })
}).min(1).max(4);
