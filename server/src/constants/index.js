export const USER_NAME_PATTERN = /^[A-Z][a-z]{0,63}$/;
export const LOGIN_PATTERN = /(?!^\d)^\w{6,16}$/;
export const PASSWORD_PATTERN = /(?=.*\d)(?=.*?[a-z])(?=.*?[A-Z])^[a-zA-Z0-9_$@!#%?]{8,60}$/;

/**
 *
 * @typedef {Symbol} Action
 */

/**
 *
 * @enum {Action} Actions
 */
export const ACTIONS = Object.freeze({
                                       /**
                                        * @readonly
                                        */
                                       CREATE: Symbol('CREATE'),
                                       /**
                                        * @readonly
                                        */
                                       READ: Symbol('READ'),
                                       /**
                                        * @readonly
                                        */
                                       UPDATE: Symbol('UPDATE'),
                                       /**
                                        * @readonly
                                        */
                                       DELETE: Symbol('DELETE'),
                                     });
/**
 *
 * @typedef {string} Role
 */

/**
 *
 * @enum {Role} Roles
 */
export const ROLES = Object.freeze({
                                     /**
                                      * @readonly
                                      */
                                     ADMIN: 'ADMIN',
                                     /**
                                      * @readonly
                                      */
                                     MODERATOR: 'MODERATOR',
                                     /**
                                      * @readonly
                                      */
                                     USER: 'USER',
                                   });

/**
 *@typedef {Symbol} Entity
 */

/**
 * @enum {Entity} Entities
 */
export const ENTITIES = Object.freeze({
                                        TASK: 'TASK',
                                        USER: 'USER',
                                      });


