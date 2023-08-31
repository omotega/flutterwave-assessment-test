import httpStatus from "http-status";
import accountqueries from "../database/queries/accountqueries";
import { accountModel } from "../types/account";
import { AppError } from "../utils/errors";
import Helper from "../utils/helper";
import { ACCOUNT_CREATION_ERROR, ACCOUNT_NOT_FOUND } from "../utils/message";

async function createBankAccount(payload: accountModel) {
  const { accountName, accountType, dateOfBirth, balance } = payload;
  const accountNumber = await Helper.generateAccountNumber();
  const bankAccount = await accountqueries.createAccount({
    accountName: accountName,
    accountNumber: accountNumber,
    accountType: accountType,
    dateOfBirth: {
      month: dateOfBirth.month.toLowerCase(),
      date: dateOfBirth.date,
      year: dateOfBirth.year,
    },
    balance: balance,
  });
  if (!bankAccount)
    throw new AppError({
      httpCode: httpStatus.INTERNAL_SERVER_ERROR,
      description: ACCOUNT_CREATION_ERROR,
    });
  return bankAccount;
}

async function getAccountDetails(accountNumber: string) {
  const account = await accountqueries.findAccountByAccountNumber(
    accountNumber
  );
  if (!account)
    throw new AppError({
      httpCode: httpStatus.NOT_FOUND,
      description: ACCOUNT_NOT_FOUND,
    });
  return account;
}

export default {
  createBankAccount,
  getAccountDetails,
};
