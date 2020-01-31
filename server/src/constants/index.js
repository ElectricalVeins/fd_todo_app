export const USER_NAME_PATTERN =/^[A-Z][a-z]{0,63}$/;
export const LOGIN_PATTERN = /(?!^\d)^\w{6,16}$/;
export const PASSWORD_PATTERN = /(?=.*\d)(?=.*?[a-z])(?=.*?[A-Z])^[a-zA-Z0-9_$@!#%?]{8,60}$/;

export const ROLES={
  OWNER:'OWNER',
  USER:'USER',
  MODERATOR:'MODERATOR',
  ADMIN:'ADMIN',
};

export const ACTIONS={
  CREATE:'CREATE',
  READ:'READ',
  UPDATE:'UPDATE',
  DELETE:'DELETE',
};
