import { UsersPermissionsRegisterInput } from 'graphql/generated/globalTypes';
import Joi from 'joi';

const fieldsValidations = {
  username: Joi.string().min(5).required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().required(),
  confirm_password: Joi.string()
    .valid(Joi.ref('password'))
    .required()
    .messages({ 'any.only': 'confirm password does not match with password' }),
};

export type FieldErrors = {
  [key: string]: string;
};

const getFieldErrors = (objError: Joi.ValidationResult) => {
  const errors: FieldErrors = {};

  if (objError.error) {
    objError.error.details.forEach((err) => {
      errors[err.path.join('.')] = err.message;
    });
  }

  return errors;
};

export const signUpValidate = (values: UsersPermissionsRegisterInput) => {
  const schema = Joi.object(fieldsValidations);

  return getFieldErrors(schema.validate(values, { abortEarly: false }));
};

type SignInValues = Omit<UsersPermissionsRegisterInput, 'username'>;

export const signInValidate = (values: SignInValues) => {
  const { email, password } = fieldsValidations;
  const schema = Joi.object({ email, password });

  return getFieldErrors(schema.validate(values, { abortEarly: false }));
};

type ForgotValidateParams = Pick<UsersPermissionsRegisterInput, 'email'>;
export const forgotValidate = (values: ForgotValidateParams) => {
  const { email } = fieldsValidations;
  const schema = Joi.object({ email });

  return getFieldErrors(schema.validate(values, { abortEarly: false }));
};

type ResetValidateParams = {
  password: string;
  confirm_password: string;
};

export const resetValidate = (values: ResetValidateParams) => {
  const { password, confirm_password } = fieldsValidations;
  const schema = Joi.object({ password, confirm_password });

  return getFieldErrors(schema.validate(values, { abortEarly: false }));
};
