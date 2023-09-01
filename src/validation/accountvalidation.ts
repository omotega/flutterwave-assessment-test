import joi from "joi";
import { accountModel } from "../types/account";
import { validationMessages } from "./custom";

const createAccountValidation = (payload: accountModel) => {
  const accountSchema = joi.object({
    accountName: joi
      .string()
      .required()
      .messages(validationMessages.accountName),
    dateOfBirth: joi
      .date()
      .less("2002-12-31")
      .required()
      .messages(validationMessages.dateOfBirth),
    accountType: joi
      .string()
      .required()
      .messages(validationMessages.accountType),
    initialBalance: joi
      .number()
      .min(0)
      .required()
      .messages(validationMessages.initialBalance),
  });

  return accountSchema.validate(payload);
};

const getAccount = (accountNumber: Number) => {
  const accountSchema = joi.object({
    accountNumber: joi
      .string()
      .length(10)
      .required()
      .messages(validationMessages.accountNumber),
  });
  return accountSchema.validate(accountNumber);
};

export default {
  createAccountValidation,
  getAccount,
};
