import { accountModel } from "../../types/account";
import Helper from "../../utils/helper";
import Account from "../model/accountmodel";

const createAccount = async (input: accountModel): Promise<accountModel> => {
  const accountNumber = await Helper.generateAccountNumber();
  return await Account.create(input);
};

export default {
  createAccount,
};
