import mongoose from "mongoose";
import { accountModel } from "../../types/account";
import mongoosePaginate from "mongoose-paginate-v2";

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

AccountSchema.plugin(mongoosePaginate);

export default mongoose.model<
  accountModel,
  mongoose.PaginateModel<accountModel>
>("Account", AccountSchema);
