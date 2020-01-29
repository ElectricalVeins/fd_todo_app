import Joi from '@hapi/joi';
import {
    LOGIN_PATTERN,
    PASSWORD_PATTERN,
    USER_NAME_PATTERN
} from '../../constants';

const nameSchema = Joi.string().pattern( USER_NAME_PATTERN );
const loginSchema = Joi.string().pattern( LOGIN_PATTERN );
const passwordSchema = Joi.string().pattern( PASSWORD_PATTERN );
const emailSchema = Joi.string().email();

export const userSchema = Joi.object( {
                               firstName: Joi.when( '$isCreate', {
                                   then: nameSchema.required(),
                                   otherwise: nameSchema,
                               } ).required(),
                               lastName: Joi.when( '$isCreate', {
                                   then: nameSchema.required(),
                                   otherwise: nameSchema,
                               } ).required(),
                               login: Joi.when( '$isCreate', {
                                   then: loginSchema.required(),
                                   otherwise: loginSchema,
                               } ).required(),
                               password: Joi.when( '$isCreate', {
                                   then: passwordSchema.required(),
                                   otherwise: passwordSchema,
                               } ).required(),
                               email: emailSchema
                           } ).min( 1 ).max( 5 );

export const eeee = Joi.object( {
                             firstName: nameSchema,
                             lastName: nameSchema,
                             login: loginSchema,
                             password: passwordSchema,
                             email: emailSchema
                         } ).min( 1 ).max( 5 );