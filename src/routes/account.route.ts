import accountcontroller from "../controller/accountcontroller";
import { Router } from "express";
import accountMiddleware from "../midlewares/validation";

const accountRouter = Router();

accountRouter.post(
  "/createaccount",
  accountMiddleware.createAccountMiddleware,
  accountcontroller.createAccount
);

accountRouter.post(
  "/getaccount",
  accountMiddleware.getAccountMiddleware,
  accountcontroller.getAccount
);

export default accountRouter;
