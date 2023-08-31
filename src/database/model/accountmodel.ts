import mongoose from "mongoose";
import { accountModel } from "../../types/account";

const AccountSchema = new mongoose.Schema({
  accountName: {
    type: "String",
    required: true,
  },
  accountNumber: {
    type: "string",
    unique: true,
  },

  dateOfBirth: {
    month: {
      type: "String",
      required: true,
    },
    date: {
      type: "Number",
      required: true,
    },
    year: {
      type: "Number",
      required: true,
    },
  },
  accountType: {
    type: "String",
    required: true,
  },
  balance: {
    type: "Number",
    defaultValue: 0,
  },
});

export default mongoose.model<accountModel>("Account", AccountSchema);
