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
    type: "String",
    required: true,
  },
  accountType: {
    type: "String",
    enum: ["savings", "checking", "current", "business"],
    defaultValue: "savings",
    required: true,
  },
  initialBalance: {
    type: "Number",
    required: true,
  },
});

AccountSchema.plugin(mongoosePaginate);

export default mongoose.model<
  accountModel,
  mongoose.PaginateModel<accountModel>
>("Account", AccountSchema);
