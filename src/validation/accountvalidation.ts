import joi from "joi";
import { accountModel } from "../types/account";
import { validationMessages } from "./custom";

const createAccountValidation = (payload: accountModel) => {
  const Months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];
  const accountSchema = joi.object({
    accountName: joi
      .string()
      .required()
      .messages(validationMessages.accountName),
    dateOfBirth: {
      month: joi
        .string()
        .valid(...Months)
        .required()
        .messages(validationMessages.month),
      date: joi.number().required().messages(validationMessages.date),
      year: joi.number().required().messages(validationMessages.year),
    },
    accountType: joi
      .string()
      .required()
      .messages(validationMessages.accountType),
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
