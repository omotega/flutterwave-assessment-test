import { accountModel } from "../../types/account";
import Account from "../model/accountmodel";

const createAccount = async (input: accountModel): Promise<accountModel> => {
  return await Account.create(input);
};

const findAccountByAccountNumber = async (accountNumber: string) => {
  return await Account.findOne({ accountNumber: accountNumber }).lean().exec();
};

const getAllBankAccount = async (options:any) => {
  return await Account.paginate({},options);
};

export default {
  createAccount,
  findAccountByAccountNumber,
  getAllBankAccount
};
