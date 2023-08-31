import accountServices from "../services/account.services";
import httpStatus from "http-status";
import { Request, Response } from "express";
import { ACCOUNT_CREATION_SUCCESS, ACCOUNT_FOUND } from "../utils/message";
import catchAsync from "../utils/catchasync";

const createAccount = catchAsync(async (req: Request, res: Response) => {
  const { accountType, dateOfBirth, accountName } = req.body;
  const response = await accountServices.createBankAccount({
    accountName: accountName,
    accountType: accountType,
    dateOfBirth: dateOfBirth,
    balance: 0,
  });
  res
    .status(httpStatus.CREATED)
    .json({ message: ACCOUNT_CREATION_SUCCESS, data: response });
});

const getAccount = catchAsync(async (req: Request, res: Response) => {
  const { accountNumber } = req.body;
  const account = await accountServices.getAccountDetails(accountNumber);
  res.status(httpStatus.OK).json({ message: ACCOUNT_FOUND, data: account });
});

export default {
  createAccount,
  getAccount,
};
