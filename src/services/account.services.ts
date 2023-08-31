import httpStatus from "http-status";
import accountqueries from "../database/queries/accountqueries";
import { accountModel } from "../types/account";
import { AppError } from "../utils/errors";
import { generateAccountNumber } from "../utils/helper";
import { ACCOUNT_CREATION_ERROR, ACCOUNT_NOT_FOUND } from "../utils/message";

async function createBankAccount(payload: accountModel): Promise<accountModel> {
  const { accountName, accountType, dateOfBirth, balance } = payload;
  const accountNumber = generateAccountNumber();
  const bankAccount = await accountqueries.createAccount({
    accountName: accountName,
    accountNumber: accountNumber,
    accountType: accountType,
    dateOfBirth: dateOfBirth,
    balance: balance,
  });
  if (!bankAccount)
    throw new AppError({
      httpCode: httpStatus.INTERNAL_SERVER_ERROR,
      description: ACCOUNT_CREATION_ERROR,
    });
  return bankAccount;
}

async function getAccountDetails(accountNumber: string): Promise<accountModel> {
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

async function allAccount({ page, limit }: { page: number; limit: number }) {
  const options = {
    page,
    limit,
    sort: { createdAt: "desc" },
    lean: true,
  };
  const accounts = await accountqueries.getAllBankAccount(options);
  if (!accounts)
    throw new AppError({
      httpCode: httpStatus.NOT_FOUND,
      description: ACCOUNT_NOT_FOUND,
    });
  return accounts;
}

export default {
  createBankAccount,
  getAccountDetails,
  allAccount,
};
