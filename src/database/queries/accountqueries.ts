import { accountModel } from "../../types/account";
import Helper from "../../utils/helper";
import Account from "../model/accountmodel";

const createAccount = async (input: accountModel): Promise<accountModel> => {
  return await Account.create(input);
};

const findAccountByAccountNumber = async (accountNumber: string) => {
  return await Account.findOne({ accountNumber: accountNumber });
};

export default {
  createAccount,
  findAccountByAccountNumber,
};
